Write-Host "Building for GitHub Pages..." -ForegroundColor Green

# Build the project
npm run build

# Check if build succeeded
if (!(Test-Path "build")) {
    Write-Host "Build failed! Check errors above." -ForegroundColor Red
    exit 1
}

# Add GitHub Pages required files
"" | Out-File -FilePath "build/.nojekyll"
Copy-Item "build/index.html" "build/404.html" -ErrorAction SilentlyContinue

# Deploy to GitHub Pages
npm run deploy

Write-Host "Deployed! Visit: https://aeneator.github.io/solid-core-forge" -ForegroundColor Cyan