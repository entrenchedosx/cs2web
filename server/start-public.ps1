param(
    [int]$Port = 8765,
    [string]$BindHost = '0.0.0.0'
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$logRoot = Join-Path ([System.IO.Path]::GetTempPath()) 'vera-public'
New-Item -ItemType Directory -Force -Path $logRoot | Out-Null

$python = Get-Command python -ErrorAction Stop
$ngrok = Get-Command ngrok -ErrorAction Stop
$serverOut = Join-Path $logRoot 'server.out.log'
$serverErr = Join-Path $logRoot 'server.err.log'
$ngrokOut = Join-Path $logRoot 'ngrok.out.log'
$ngrokErr = Join-Path $logRoot 'ngrok.err.log'

$listener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue |
    Select-Object -First 1
if (-not $listener) {
    $serverProcess = Start-Process `
        -FilePath $python.Source `
        -ArgumentList @('server/signaling_server.py', '--host', $BindHost, '--port', $Port) `
        -WorkingDirectory $repoRoot `
        -WindowStyle Hidden `
        -RedirectStandardOutput $serverOut `
        -RedirectStandardError $serverErr `
        -PassThru
    Start-Sleep -Milliseconds 800
    Write-Host "Started Vera room server (PID $($serverProcess.Id))."
} else {
    Write-Host "Vera room server is already listening on port $Port (PID $($listener.OwningProcess))."
}

$matchingNgrok = Get-CimInstance Win32_Process -Filter "name='ngrok.exe'" |
    Where-Object { $_.CommandLine -match "\bhttp\s+$Port\b" } |
    Select-Object -First 1
if (-not $matchingNgrok) {
    $ngrokProcess = Start-Process `
        -FilePath $ngrok.Source `
        -ArgumentList @('http', "$Port", '--log=stdout') `
        -WorkingDirectory $repoRoot `
        -WindowStyle Hidden `
        -RedirectStandardOutput $ngrokOut `
        -RedirectStandardError $ngrokErr `
        -PassThru
    Write-Host "Started ngrok tunnel (PID $($ngrokProcess.Id))."
} else {
    Write-Host "An ngrok tunnel for port $Port is already running (PID $($matchingNgrok.ProcessId))."
}

$tunnel = $null
foreach ($apiPort in 4040..4050) {
    try {
        $api = Invoke-RestMethod "http://127.0.0.1:$apiPort/api/tunnels" -TimeoutSec 2
        $tunnel = $api.tunnels |
            Where-Object { $_.config.addr -match ":$Port$" -and $_.proto -eq 'https' } |
            Select-Object -First 1
        if ($tunnel) { break }
    } catch {
        # Each ngrok process may choose a different local inspector port.
    }
}

if (-not $tunnel) {
    Write-Warning "The ngrok process started, but no HTTPS tunnel for port $Port was found yet."
    Write-Host "Logs: $logRoot"
    exit 0
}

$signalUrl = "$($tunnel.public_url)/signal"
Write-Host "Public tunnel: $($tunnel.public_url)"
Write-Host "GitHub Pages override: https://entrenchedosx.github.io/cs2web/?signal=$([uri]::EscapeDataString($signalUrl))"

try {
    $health = Invoke-WebRequest -UseBasicParsing -SkipHttpErrorCheck -TimeoutSec 8 "$($tunnel.public_url)/healthz"
    if ($health.StatusCode -eq 200) {
        Write-Host 'Public health check: OK'
    } else {
        Write-Warning "Public health check returned HTTP $($health.StatusCode): $($health.Content.Trim())"
    }
} catch {
    Write-Warning "Public health check failed: $($_.Exception.Message)"
}

Write-Host "Background logs: $logRoot"
