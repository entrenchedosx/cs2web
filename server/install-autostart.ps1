param(
    [string]$TaskName = 'Vera Public Multiplayer'
)

$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path -Parent $PSScriptRoot
$launcher = Join-Path $repoRoot 'server\start-cloudflare.ps1'
$powershell = Join-Path $PSHOME 'powershell.exe'

if (-not (Test-Path $launcher)) {
    throw "Vera launcher not found: $launcher"
}

$actionArgs = '-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -WindowStyle Hidden -File "' + $launcher + '"'
$action = New-ScheduledTaskAction `
    -Execute $powershell `
    -Argument $actionArgs `
    -WorkingDirectory $repoRoot
$trigger = New-ScheduledTaskTrigger -AtStartup
$principal = New-ScheduledTaskPrincipal `
    -UserId "$env:USERDOMAIN\$env:USERNAME" `
    -LogonType S4U `
    -RunLevel Limited
$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries

try {
    Register-ScheduledTask `
        -TaskName $TaskName `
        -Action $action `
        -Trigger $trigger `
        -Principal $principal `
        -Settings $settings `
        -Description 'Starts Vera room server and its public Cloudflare tunnel.' `
        -Force | Out-Null

    Start-ScheduledTask -TaskName $TaskName
    Write-Host "Installed and started scheduled task: $TaskName"
    Write-Host 'It will start automatically at Windows startup.'
} catch {
    $startup = [Environment]::GetFolderPath('Startup')
    $shortcutPath = Join-Path $startup 'Vera Public Multiplayer.lnk'
    $shell = New-Object -ComObject WScript.Shell
    $shortcut = $shell.CreateShortcut($shortcutPath)
    $shortcut.TargetPath = $powershell
    $shortcut.Arguments = $actionArgs
    $shortcut.WorkingDirectory = $repoRoot
    $shortcut.WindowStyle = 7
    $shortcut.Description = 'Starts Vera room server and its public Cloudflare tunnel.'
    $shortcut.Save()
    Start-Process -FilePath $powershell -ArgumentList $actionArgs -WorkingDirectory $repoRoot -WindowStyle Hidden
    Write-Host "Installed per-user startup shortcut: $shortcutPath"
    Write-Host 'It will start automatically when this Windows account logs in.'
}
