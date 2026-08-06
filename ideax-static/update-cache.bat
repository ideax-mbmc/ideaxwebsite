@echo off
REM Cache Buster Script for MBMC IdeaX 2025
echo 🚀 MBMC IdeaX Cache Buster
echo ================================

REM Get current timestamp
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set timestamp=%datetime:~0,12%
set version=v=%timestamp%

echo 📅 New version: %version%

REM Update index.html
if exist index.html (
    echo 🔄 Updating index.html...
    
    REM Create temporary file with updated versions
    powershell -Command "(Get-Content index.html -Raw) -replace 'css/styles\.css\?v=\d+', 'css/styles.css?%version%' -replace 'js/scripts\.js\?v=\d+', 'js/scripts.js?%version%' | Set-Content index.html -NoNewline"
    
    echo ✅ Updated index.html with version %version%
) else (
    echo ❌ File index.html not found!
)

echo.
echo 🎉 Cache busting complete!
echo 💡 Your changes should now be visible with a regular refresh.
echo.
echo 📝 Remember to run this script after making changes to CSS or JS files.
pause
