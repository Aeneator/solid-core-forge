const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '../public/HomeGallery');
const OUTPUT_FILE = path.join(__dirname, '../public/gallery-manifest.json');

// Common image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function getDisplayName(folderName) {
    return folderName.replace(/^\[\d+\]\s*/, '').trim();
}

function generateManifest() {
    try {
        if (!fs.existsSync(GALLERY_DIR)) {
            console.error(`Gallery directory not found: ${GALLERY_DIR}`);
            process.exit(1);
        }

        const projects = [];
        const folders = fs.readdirSync(GALLERY_DIR).sort((a, b) => a.localeCompare(b));

        folders.forEach((folder) => {
            const folderPath = path.join(GALLERY_DIR, folder);
            const stat = fs.statSync(folderPath);
            const displayName = getDisplayName(folder);

            // Only process directories
            if (!stat.isDirectory()) return;

            const files = fs.readdirSync(folderPath);
            const images = files
                .filter(file => IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase()))
                .sort() // Sort alphabetically
                .map((file, index) => ({
                    src: `/HomeGallery/${folder}/${file}`,
                    alt: `${displayName} ${index + 1}`
                }));

            // Only add if there are images
            if (images.length > 0) {
                projects.push({
                    title: displayName,
                    images: images
                });
            }
        });

        // Write manifest file
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2));
        console.log(`✓ Gallery manifest generated: ${projects.length} projects found`);
    } catch (error) {
        console.error('Error generating gallery manifest:', error);
        process.exit(1);
    }
}

generateManifest();
