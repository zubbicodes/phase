#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if sharp is available, if not install it
function ensureSharp() {
  try {
    import('sharp');
  } catch (error) {
    console.log('Installing sharp for image conversion...');
    execSync('npm install sharp --save-dev', { stdio: 'inherit' });
  }
}

// Convert image to WebP
async function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    const sharp = await import('sharp');
    await sharp.default(inputPath)
      .webp({ quality })
      .toFile(outputPath);
    
    console.log(`✅ Converted: ${inputPath} → ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return false;
  }
}

// Get all image files recursively
function getAllImageFiles(dir, extensions = ['.jpg', '.jpeg', '.png', '.gif']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main conversion function
async function convertAllImages() {
  console.log('🚀 Starting image conversion to WebP...\n');
  
  // Ensure sharp is available
  try {
    await import('sharp');
  } catch (error) {
    console.log('Installing sharp for image conversion...');
    execSync('npm install sharp --save-dev', { stdio: 'inherit' });
  }
  
  const publicDir = path.join(__dirname, 'public');
  const imageFiles = getAllImageFiles(publicDir);
  
  console.log(`Found ${imageFiles.length} images to convert:\n`);
  
  let converted = 0;
  let failed = 0;
  
  for (const imagePath of imageFiles) {
    const ext = path.extname(imagePath);
    const nameWithoutExt = path.basename(imagePath, ext);
    const dir = path.dirname(imagePath);
    const webpPath = path.join(dir, `${nameWithoutExt}.webp`);
    
    // Skip if WebP already exists
    if (fs.existsSync(webpPath)) {
      console.log(`⏭️  Skipping: ${imagePath} (WebP already exists)`);
      continue;
    }
    
    const success = await convertToWebP(imagePath, webpPath);
    if (success) {
      converted++;
    } else {
      failed++;
    }
  }
  
  console.log(`\n📊 Conversion Summary:`);
  console.log(`✅ Successfully converted: ${converted}`);
  console.log(`❌ Failed conversions: ${failed}`);
  console.log(`📁 Total images processed: ${imageFiles.length}`);
  
  if (converted > 0) {
    console.log(`\n🎉 Conversion complete! WebP images are ready for use.`);
    console.log(`\n📝 Next steps:`);
    console.log(`1. Update your code to reference .webp files`);
    console.log(`2. Add fallback support for older browsers`);
    console.log(`3. Test the performance improvements`);
  }
}

// Run the conversion
convertAllImages().catch(console.error);
