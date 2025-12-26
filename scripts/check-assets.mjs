#!/usr/bin/env node
/**
 * Asset Verification Script
 * Checks that all required assets exist in public folders
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');

const requiredAssets = {
  team: [
    'team/abdul-hameed-chohan.jpg',
    'team/sohail-khurshid.jpg',
    'team/arooba-hameed.jpg',
    'team/malik-ibrar-fayyaz.jpg',
    'team/muhammad-riffat-pasha.jpeg',
    'team/muhammad-nawaz.jpeg',
    'team/ameen-ur-rehman.jpg',
  ],
  images: [
    'images/about-modern-office-lobby.jpg',
    'images/about-law-library-shelves.jpg',
    'images/hero-scales-minimal.jpg',
    'images/practice-corporate-building.jpg',
    'images/practice-litigation-columns.jpg',
    'images/practice-real-estate-residence.jpg',
  ],
  brand: [
    'brand/logo-mark.png', // Header uses text-only logo, but logo files are available
  ],
};

let hasErrors = false;

console.log('🔍 Checking required assets...\n');

// Check team assets
console.log('📸 Team Images:');
for (const asset of requiredAssets.team) {
  const path = join(publicDir, asset);
  const exists = existsSync(path);
  if (exists) {
    console.log(`  ✓ ${asset}`);
  } else {
    console.log(`  ✗ ${asset} - MISSING`);
    hasErrors = true;
  }
}

// Check image assets
console.log('\n🖼️  Background/Content Images:');
for (const asset of requiredAssets.images) {
  const path = join(publicDir, asset);
  const exists = existsSync(path);
  if (exists) {
    console.log(`  ✓ ${asset}`);
  } else {
    console.log(`  ✗ ${asset} - MISSING`);
    hasErrors = true;
  }
}

// Check brand assets
console.log('\n🎨 Brand Assets:');
for (const asset of requiredAssets.brand) {
  const path = join(publicDir, asset);
  const exists = existsSync(path);
  if (exists) {
    console.log(`  ✓ ${asset}`);
  } else {
    console.log(`  ✗ ${asset} - MISSING`);
    hasErrors = true;
  }
}

console.log('');

if (hasErrors) {
  console.error('❌ Some required assets are missing!');
  console.error('   Run: .\\scripts\\sync-information-assets.ps1');
  process.exit(1);
} else {
  console.log('✅ All required assets are present!');
  process.exit(0);
}

