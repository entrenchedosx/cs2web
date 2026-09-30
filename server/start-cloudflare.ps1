param(
    [int]$Port = 8765,
    [string]$BindHost = '0.0.0.0'
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$stateRoot = Join-Path $env:LOCALAPPDATA 'Vera'
$logRoot = Join-Path ([System.IO.Path]::GetTempPath()) 'vera-public'
$cloudflared = Join-Path $stateRoot 'cloudflared.exe'
New-Item -ItemType Directory -Force -Path $stateRoot, $logRoot | Out-Null

if (-not (Test-Path $cloudflared)) {
    Write-Host 'Downloading Cloudflare Tunnel client...'
    Invoke-WebRequest `
        -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' `
        -OutFile $cloudflared `
        -UseBasicParsing
}

$python = Get-Command python -ErrorAction Stop
$serverOut = Join-Path $logRoot 'server.out.log'
$serverErr = Join-Path $logRoot 'server.err.log'
$tunnelOut = Join-Path $logRoot 'cloudflared.out.log'
$tunnelErr = Join-Path $logRoot 'cloudflared.err.log'

$listener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue |
    Select-Object -First 1
if (-not $listener) {
    $server = Start-Process `
        -FilePath $python.Source `
        -ArgumentList @('server/signaling_server.py', '--host', $BindHost, '--port', $Port) `
        -WorkingDirectory $repoRoot `
        -WindowStyle Hidden `
        -RedirectStandardOutput $serverOut `
        -RedirectStandardError $serverErr `
        -PassThru
    Start-Sleep -Milliseconds 800
    Write-Host "Started Vera room server (PID $($server.Id))."
} else {
    Write-Host "Vera room server is already listening on port $Port (PID $($listener.OwningProcess))."
}

$existing = Get-CimInstance Win32_Process -Filter "name='cloudflared.exe'" |
    Where-Object { $_.CommandLine -match "tunnel.*127\.0\.0\.1:$Port" } |
    Select-Object -First 1
if (-not $existing) {
    $tunnel = Start-Process `
        -FilePath $cloudflared `
        -ArgumentList @('tunnel', '--url', "http://127.0.0.1:$Port", '--no-autoupdate') `
        -WorkingDirectory $repoRoot `
        -WindowStyle Hidden `
        -RedirectStandardOutput $tunnelOut `
        -RedirectStandardError $tunnelErr `
        -PassThru
    Write-Host "Started Cloudflare tunnel (PID $($tunnel.Id))."
} else {
    Write-Host "Cloudflare tunnel is already running (PID $($existing.ProcessId))."
}

$publicUrl = $null
for ($attempt = 0; $attempt -lt 30 -and -not $publicUrl; $attempt++) {
    foreach ($log in @($tunnelOut, $tunnelErr)) {
        if (Test-Path $log) {
            $match = Select-String -Path $log -Pattern 'https://[a-z0-9-]+\.trycloudflare\.com' |
                Select-Object -Last 1
            if ($match) {
                $publicUrl = $match.Matches[0].Value
                break
            }
        }
    }
    if (-not $publicUrl) { Start-Sleep -Seconds 1 }
}

if (-not $publicUrl) {
    Write-Warning "Cloudflare started, but its temporary public URL was not found yet. Logs: $logRoot"
    exit 0
}

Write-Host "Public tunnel: $publicUrl"
Write-Host "GitHub Pages override: https://entrenchedosx.github.io/cs2web/?signal=$([uri]::EscapeDataString($publicUrl))"
try {
    $health = Invoke-WebRequest -UseBasicParsing -TimeoutSec 10 "$publicUrl/healthz"
    if ($health.StatusCode -eq 200) {
        Write-Host 'Public health check: OK'
    } else {
        Write-Warning "Public health check returned HTTP $($health.StatusCode): $($health.Content.Trim())"
    }
} catch {
    Write-Warning "Public health check failed: $($_.Exception.Message)"
}
Write-Host "Background logs: $logRoot"
