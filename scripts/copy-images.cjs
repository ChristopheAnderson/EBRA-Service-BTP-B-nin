const fs = require("fs");
const path = require("path");

const srcDir = path.resolve(__dirname, "..", "Images");
const dstDir = path.resolve(__dirname, "..", "public", "images");

if (!fs.existsSync(dstDir)) {
  fs.mkdirSync(dstDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
const manifest = [];
let counter = 1;

for (const f of files) {
  const fullSrc = path.join(srcDir, f);
  const stat = fs.statSync(fullSrc);
  if (stat.isFile()) {
    const ext = path.extname(f) || ".jpg";
    const newName = `btp-${String(counter).padStart(2, "0")}${ext.toLowerCase()}`;
    const fullDst = path.join(dstDir, newName);
    fs.copyFileSync(fullSrc, fullDst);
    manifest.push({
      id: counter,
      filename: newName,
      path: `/images/${newName}`,
      originalName: f,
      size: stat.size
    });
    counter++;
  }
}

const srcPath = path.resolve(__dirname, "..", "src");
if (!fs.existsSync(srcPath)) {
  fs.mkdirSync(srcPath, { recursive: true });
}

fs.writeFileSync(path.join(srcPath, "images-manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Copied ${manifest.length} images to public/images/ and saved manifest in src/images-manifest.json`);

