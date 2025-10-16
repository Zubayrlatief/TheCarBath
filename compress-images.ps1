Add-Type -AssemblyName System.Drawing

function Compress-Image {
    param(
        [string]$InputPath,
        [int]$Quality = 80,
        [int]$MaxWidth = 1920
    )
    
    Write-Host "Compressing: $InputPath"
    
    $img = [System.Drawing.Image]::FromFile($InputPath)
    
    # Calculate new dimensions
    if ($img.Width -gt $MaxWidth) {
        $ratio = $MaxWidth / $img.Width
        $newWidth = $MaxWidth
        $newHeight = [int]($img.Height * $ratio)
    } else {
        $newWidth = $img.Width
        $newHeight = $img.Height
    }
    
    # Create new bitmap
    $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($newImg)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
    
    # Set up JPEG encoder
    $encoder = [System.Drawing.Imaging.Encoder]::Quality
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $Quality)
    
    # Get JPEG codec
    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    
    # Create temp file
    $tempFile = $InputPath + ".temp"
    
    # Save to temp
    $newImg.Save($tempFile, $jpegCodec, $encoderParams)
    
    # Cleanup
    $graphics.Dispose()
    $newImg.Dispose()
    $img.Dispose()
    
    # Replace original
    Start-Sleep -Milliseconds 100
    Remove-Item $InputPath -Force
    Move-Item $tempFile $InputPath -Force
    
    $newSize = [math]::Round((Get-Item $InputPath).Length / 1MB, 2)
    Write-Host "  Compressed to: $newSize MB" -ForegroundColor Green
}

Write-Host "`n=== Compressing Large Images ===" -ForegroundColor Cyan
Write-Host "This will significantly speed up your website!`n"

# Compress the largest image first (10MB!)
if (Test-Path "public\20220502_175038.jpg") {
    Write-Host "[1/6] Processing 20220502_175038.jpg (10.33 MB)"
    Compress-Image "public\20220502_175038.jpg" -Quality 75 -MaxWidth 1920
}

# Compress hero images
if (Test-Path "public\20220430_115624.jpg") {
    Write-Host "[2/6] Processing 20220430_115624.jpg (2.37 MB)"
    Compress-Image "public\20220430_115624.jpg" -Quality 80 -MaxWidth 1920
}

if (Test-Path "public\20220430_134409.jpg") {
    Write-Host "[3/6] Processing 20220430_134409.jpg (2.19 MB)"
    Compress-Image "public\20220430_134409.jpg" -Quality 80 -MaxWidth 1920
}

# Compress content images
if (Test-Path "public\20220430_142652.jpg") {
    Write-Host "[4/6] Processing 20220430_142652.jpg (2.19 MB)"
    Compress-Image "public\20220430_142652.jpg" -Quality 80 -MaxWidth 1280
}

if (Test-Path "public\20220430_134422.jpg") {
    Write-Host "[5/6] Processing 20220430_134422.jpg (2.08 MB)"
    Compress-Image "public\20220430_134422.jpg" -Quality 80 -MaxWidth 1280
}

if (Test-Path "public\20220430_134432.jpg") {
    Write-Host "[6/6] Processing 20220430_134432.jpg (1.65 MB)"
    Compress-Image "public\20220430_134432.jpg" -Quality 80 -MaxWidth 1280
}

Write-Host "`n=== Compression Complete! ===" -ForegroundColor Green
Write-Host "Your images are now optimized for web!`n"
