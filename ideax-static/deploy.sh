#!/bin/bash

# MBMC IdeaX 2025 Static Website Deployment Script

echo "🚀 MBMC IdeaX 2025 Static Website Deployment"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the ideax-static directory."
    exit 1
fi

echo "✅ Found index.html - we're in the right directory"

# Validate HTML files
echo "🔍 Validating HTML files..."
for file in *.html; do
    if [ -f "$file" ]; then
        echo "  ✓ $file found"
    fi
done

# Check required directories
echo "📁 Checking required directories..."
for dir in css js static images; do
    if [ -d "$dir" ]; then
        echo "  ✓ $dir/ directory exists"
    else
        echo "  ❌ $dir/ directory missing"
    fi
done

# Check file sizes
echo "📊 File size summary:"
echo "  HTML files: $(du -sh *.html 2>/dev/null | awk '{print $1}' | paste -sd+ | bc 2>/dev/null || echo 'N/A')"
echo "  CSS files: $(du -sh css/ 2>/dev/null | awk '{print $1}')"
echo "  JS files: $(du -sh js/ 2>/dev/null | awk '{print $1}')"
echo "  Images: $(du -sh images/ 2>/dev/null | awk '{print $1}')"
echo "  Static assets: $(du -sh static/ 2>/dev/null | awk '{print $1}')"
echo "  Total size: $(du -sh . | awk '{print $1}')"

echo ""
echo "🌐 Deployment Options:"
echo "======================"
echo ""
echo "1. Local Testing:"
echo "   - Open index.html in your browser"
echo "   - Or run a local server: python -m http.server 8000"
echo ""
echo "2. GitHub Pages:"
echo "   - Push this directory to a GitHub repository"
echo "   - Enable GitHub Pages in repository settings"
echo ""
echo "3. Netlify:"
echo "   - Drag and drop this folder to netlify.com/drop"
echo "   - Or connect your GitHub repository"
echo ""
echo "4. Vercel:"
echo "   - Install Vercel CLI: npm i -g vercel"
echo "   - Run: vercel --prod"
echo ""
echo "5. Traditional Hosting:"
echo "   - Upload all files via FTP/SFTP to your web server"
echo "   - Ensure index.html is in the root directory"
echo ""

echo "✨ Deployment preparation complete!"
echo ""
echo "📋 Quick checklist:"
echo "  ☐ Test website locally"
echo "  ☐ Check all links work"
echo "  ☐ Verify images load"
echo "  ☐ Test on mobile devices"
echo "  ☐ Validate forms work"
echo "  ☐ Check social media links"
echo ""
echo "🎉 Your static website is ready for deployment!"
