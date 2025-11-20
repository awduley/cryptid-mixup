// scripts/optimize-mascots.js

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Root of the project (where package.json lives)
const ROOT_DIR = process.cwd();

// Where your mascot folders live
const MASCOTS_DIR = path.join(ROOT_DIR, 'public', 'images', 'mascots');

// These are the widths we'll generate for each mascot image
// e.g. bif-goot-400x600.*, bif-goot-800x1200.*, bif-goot-1024x1536.*
const TARGET_WIDTHS = [400, 800, 1024];

// File extensions we'll accept for master images
const MASTER_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Helper: does this file look like a master image for the given slug?
function isMasterFile(fileName, slug) {
  const ext = path.extname(fileName).toLowerCase();
  const base = path.basename(fileName, ext);
  return MASTER_EXTENSIONS.includes(ext) && base === `${slug}-master`;
}

// Process a single mascot folder, e.g. /public/images/mascots/bif-goot
async function processMascotFolder(slug) {
  const mascotDir = path.join(MASCOTS_DIR, slug);

  if (!fs.existsSync(mascotDir)) {
    console.warn(`⚠️  Mascot folder not found: ${mascotDir}`);
    return;
  }

  const files = fs.readdirSync(mascotDir);
  const masterFile = files.find((file) => isMasterFile(file, slug));

  if (!masterFile) {
    console.warn(`⚠️  No master file found for slug "${slug}" in ${mascotDir}`);
    console.warn(`    Expected something like: ${slug}-master.png or .jpg`);
    return;
  }

  const masterPath = path.join(mascotDir, masterFile);
  console.log(`\n🎨 Processing mascot "${slug}" from master: ${masterFile}`);

  for (const width of TARGET_WIDTHS) {
    const baseOutName = `${slug}-${width}`;
    const baseOutPath = path.join(mascotDir, baseOutName);

    console.log(`  → Generating ${baseOutName}.{avif,webp,jpg}`);

    // Load the master image and resize to the target width.
    // withoutEnlargement: true means "don't upscale if master is smaller"
    const image = sharp(masterPath).resize({ width, withoutEnlargement: true });

    // AVIF
    await image
      .clone()
      .toFormat('avif', { quality: 60 })
      .toFile(`${baseOutPath}.avif`);

    // WebP
    await image
      .clone()
      .toFormat('webp', { quality: 75 })
      .toFile(`${baseOutPath}.webp`);

    // JPEG
    await image
      .clone()
      .jpeg({ quality: 80 })
      .toFile(`${baseOutPath}.jpg`);
  }

  console.log(`✅ Done generating sizes for "${slug}"`);
}

// Main entry point
async function main() {
  // Allow optional slug argument:
  // node scripts/optimize-mascots.js bif-goot
  const [, , slugArg] = process.argv;

  if (!fs.existsSync(MASCOTS_DIR)) {
    console.error(`❌ Mascots directory not found: ${MASCOTS_DIR}`);
    process.exit(1);
  }

  if (slugArg) {
    // Only process a single mascot if slug is passed
    await processMascotFolder(slugArg);
  } else {
    // No slug → process every folder in /public/images/mascots
    const mascotSlugs = fs
      .readdirSync(MASCOTS_DIR)
      .filter((name) => {
        const fullPath = path.join(MASCOTS_DIR, name);
        return fs.statSync(fullPath).isDirectory();
      });

    if (mascotSlugs.length === 0) {
      console.warn('⚠️  No mascot folders found under:', MASCOTS_DIR);
      return;
    }

    for (const slug of mascotSlugs) {
      await processMascotFolder(slug);
    }
  }

  console.log('\n✨ All done.');
}

main().catch((err) => {
  console.error('❌ Error in optimize-mascots script:', err);
  process.exit(1);
});