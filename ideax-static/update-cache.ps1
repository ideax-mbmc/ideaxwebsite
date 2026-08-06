#!/usr/bin/env pwsh
# Cache Buster Script for MBMC IdeaX 2025
# This script updates version numbers in HTML files to bust browser cache

Write-Host "🚀 MBMC IdeaX Cache Buster" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Get current timestamp for version
$timestamp = Get-Date -Format "yyyyMMddHHmm"
$version = "v=$timestamp"

Write-Host "📅 New version: $version" -ForegroundColor Green

# Files to update
$htmlFiles = @("index.html")

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "🔄 Updating $file..." -ForegroundColor Yellow
        
        # Read the file content
        $content = Get-Content $file -Raw
        
        # Update CSS version
        $content = $content -replace 'css/styles\.css\?v=\d+', "css/styles.css?$version"
        
        # Update JS version
        $content = $content -replace 'js/scripts\.js\?v=\d+', "js/scripts.js?$version"
        
        # Write back to file
        Set-Content $file -Value $content -NoNewline
        
        Write-Host "✅ Updated $file with version $version" -ForegroundColor Green
    } else {
        Write-Host "❌ File $file not found!" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎉 Cache busting complete!" -ForegroundColor Green
Write-Host "💡 Your changes should now be visible with a regular refresh." -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 Remember to run this script after making changes to CSS or JS files." -ForegroundColor Yellow
