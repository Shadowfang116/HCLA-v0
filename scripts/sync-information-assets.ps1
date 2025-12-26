# Sync Information Folder Assets to Vite Project
# Copies team images, logos, and sprites from information/ folder to public/ folders

$ErrorActionPreference = "Stop"

# Get script directory and project root
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$InfoRoot = Join-Path (Split-Path -Parent $ProjectRoot) "information"

# Check if information folder exists
if (-not (Test-Path $InfoRoot)) {
    Write-Host "ERROR: Information folder not found at: $InfoRoot" -ForegroundColor Red
    Write-Host "Please ensure the 'information' folder exists at: Desktop/HCLA/information/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "=== Syncing Assets from Information Folder ===" -ForegroundColor Cyan
Write-Host "Source: $InfoRoot" -ForegroundColor Gray
Write-Host "Destination: $ProjectRoot\public" -ForegroundColor Gray
Write-Host ""

# Create destination directories
$Dirs = @(
    "$ProjectRoot\public\team",
    "$ProjectRoot\public\brand",
    "$ProjectRoot\public\images"
)

foreach ($Dir in $Dirs) {
    if (-not (Test-Path $Dir)) {
        New-Item -ItemType Directory -Path $Dir -Force | Out-Null
        Write-Host "Created directory: $Dir" -ForegroundColor Green
    }
}

# Copy TEAM images with renames
Write-Host ""
Write-Host "--- Copying Team Images ---" -ForegroundColor Yellow
$TeamMappings = @{
    "Abdul Hameed Chohan.jpg" = "abdul-hameed-chohan.jpg"
    "Arooba Hameed.jpg" = "arooba-hameed.jpg"
    "Malik Ibrar Fayyaz.JPG" = "malik-ibrar-fayyaz.jpg"
    "Muhammad Nawaz Senier Clerk.jpeg" = "muhammad-nawaz.jpeg"
    "Muhammad Riffat Pasha.jpeg" = "muhammad-riffat-pasha.jpeg"
    "Sohail Khurshid.jpg" = "sohail-khurshid.jpg"
    "Iqra Riaz.jpg" = "iqra-riaz.jpg"
    "iqra-riaz-square.jpg" = "iqra-riaz-square.jpg"
    "Ameen-ur-rehman_advocate_high_court.jpg" = "ameen-ur-rehman.jpg"
}

foreach ($Mapping in $TeamMappings.GetEnumerator()) {
    $Source = Join-Path $InfoRoot $Mapping.Key
    $Dest = Join-Path "$ProjectRoot\public\team" $Mapping.Value
    
    if (Test-Path $Source) {
        Copy-Item -Path $Source -Destination $Dest -Force
        Write-Host "  OK $($Mapping.Key) -> $($Mapping.Value)" -ForegroundColor Green
    } else {
        Write-Host "  MISSING: $($Mapping.Key)" -ForegroundColor Red
    }
}

# Copy LOGOS (no renames)
Write-Host ""
Write-Host "--- Copying Logo Assets ---" -ForegroundColor Yellow
$LogosDir = Join-Path $InfoRoot "hcla-logos"
if (Test-Path $LogosDir) {
    $Logos = Get-ChildItem -Path $LogosDir -Filter "*.png"
    foreach ($Logo in $Logos) {
        $Dest = Join-Path "$ProjectRoot\public\brand" $Logo.Name
        Copy-Item -Path $Logo.FullName -Destination $Dest -Force
        Write-Host "  OK $($Logo.Name)" -ForegroundColor Green
    }
} else {
    Write-Host "  Logos directory not found: $LogosDir" -ForegroundColor Red
}

# Copy SPRITES/BACKGROUNDS with renames
Write-Host ""
Write-Host "--- Copying Sprite/Background Images ---" -ForegroundColor Yellow
$SpritesDir = Join-Path $InfoRoot "sprites"
$SpriteMappings = @{
    "hcla-about-law-library-shelves.jpg" = "about-law-library-shelves.jpg"
    "hcla-about-modern-office-lobby.jpg" = "about-modern-office-lobby.jpg"
    "hcla-background-abstract-curves-stone.jpg" = "background-curves-stone.jpg"
    "hcla-background-brass-frames-geometric.jpg" = "background-brass-frames.jpg"
    "hcla-hero-abstract-chair-balance.jpg" = "hero-chair-balance.jpg"
    "hcla-hero-abstract-scales-minimal.jpg" = "hero-scales-minimal.jpg"
    "hcla-practice-corporate-glass-building.jpg" = "practice-corporate-building.jpg"
    "hcla-practice-litigation-courthouse-columns.jpg" = "practice-litigation-columns.jpg"
    "hcla-practice-real-estate-modern-residence.jpg" = "practice-real-estate-residence.jpg"
    "hcla-values-foundation-pedestal-brass.jpg" = "values-foundation-pedestal.jpg"
}

if (Test-Path $SpritesDir) {
    foreach ($Mapping in $SpriteMappings.GetEnumerator()) {
        $Source = Join-Path $SpritesDir $Mapping.Key
        $Dest = Join-Path "$ProjectRoot\public\images" $Mapping.Value
        
        if (Test-Path $Source) {
            Copy-Item -Path $Source -Destination $Dest -Force
            Write-Host "  OK $($Mapping.Key) -> $($Mapping.Value)" -ForegroundColor Green
        } else {
            Write-Host "  MISSING: $($Mapping.Key)" -ForegroundColor Red
        }
    }
} else {
    Write-Host "  Sprites directory not found: $SpritesDir" -ForegroundColor Red
}

Write-Host ""
Write-Host "=== Sync Complete ===" -ForegroundColor Cyan
Write-Host ""
