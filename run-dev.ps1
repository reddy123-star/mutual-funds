<#
Run this from the project root to install dependencies and start Next.js dev server.
Usage (PowerShell):
  .\run-dev.ps1

This script checks for Node and npm, attempts to run `npm install` and `npm run dev`.
If `node` is not found, it will print guidance.
#>

function Check-Command($name){
  try{ Get-Command $name -ErrorAction Stop | Out-Null; return $true }catch{ return $false }
}

if(-not (Check-Command node)){
  Write-Host "Error: 'node' not found on PATH. Install Node.js LTS from https://nodejs.org and re-open the terminal." -ForegroundColor Red
  exit 1
}

if(-not (Check-Command npm)){
  Write-Host "Error: 'npm' not found on PATH. Ensure Node.js installation included npm." -ForegroundColor Red
  exit 1
}

Write-Host "Node and npm found. Installing dependencies..." -ForegroundColor Green
npm install
if($LASTEXITCODE -ne 0){ Write-Host "npm install failed." -ForegroundColor Red; exit $LASTEXITCODE }

Write-Host "Starting Next.js dev server..." -ForegroundColor Green
npm run dev
