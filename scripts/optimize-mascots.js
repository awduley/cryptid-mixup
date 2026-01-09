// scripts/optimize-mascots.js

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Root of the project (where package.json lives)
const ROOT_DIR = process.cwd();

// Where your mascot folders live
const CREW_MEMBERS_DIR = path.join(ROOT_DIR, 'public', 'images', 'crew-members');

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
async function processCrewMembersFolder(slug) {
  const crewMembersDir = path.join(CREW_MEMBERS_DIR, slug);

  if (!fs.existsSync(crewMembersDir)) {
    console.warn(`⚠️  crew-members folder not found: ${crewMembersDir}`);
    return;
  }

  const files = fs.readdirSync(crewMembersDir);
  const masterFile = files.find((file) => isMasterFile(file, slug));

  if (!masterFile) {
    console.warn(`⚠️  No master file found for slug "${slug}" in ${crewMembersDir}`);
    console.warn(`    Expected something like: ${slug}-master.png or .jpg`);
    return;
  }

  const masterPath = path.join(crewMembersDir, masterFile);
  console.log(`\n🎨 Processing crew member "${slug}" from master: ${masterFile}`);

  for (const width of TARGET_WIDTHS) {
    const baseOutName = `${slug}-${width}`;
    const baseOutPath = path.join(crewMembersDir, baseOutName);

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

  if (!fs.existsSync(CREW_MEMBERS_DIR)) {
    console.error(`❌ crew-members directory not found: ${CREW_MEMBERS_DIR}`);
    process.exit(1);
  }

  if (slugArg) {
    // Only process a single mascot if slug is passed
    await processCrewMembersFolder(slugArg);
  } else {
    // No slug → process every folder in /public/images/mascots
    const mascotSlugs = fs
      .readdirSync(CREW_MEMBERS_DIR)
      .filter((name) => {
        const fullPath = path.join(CREW_MEMBERS_DIR, name);
        return fs.statSync(fullPath).isDirectory();
      });

    if (crewMembersSlugs.length === 0) {
      console.warn('⚠️  No crew-member folders found under:', CREW_MEMBERS_DIR);
      return;
    }

    for (const slug of Slugs) {
      await processCrewMembersFolder(slug);
    }
  }

  console.log('\n✨ All done.');
}

main().catch((err) => {
  console.error('❌ Error in optimize-crew-member script:', err);
  process.exit(1);
});