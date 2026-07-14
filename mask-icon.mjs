import sharp from "sharp";

const SIZE = 1024;
const R = Math.round(SIZE * 0.2237); // Apple squircle approximation

const mask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><rect x="0" y="0" width="${SIZE}" height="${SIZE}" rx="${R}" ry="${R}" fill="#fff"/></svg>`
);

await sharp("public/assets/sipster/icon-raw.png")
  .resize(SIZE, SIZE)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile("public/assets/sipster/icon.png");

// Smaller favicon / apple-touch versions
await sharp("public/assets/sipster/icon.png").resize(180, 180).png().toFile("public/assets/sipster/icon-180.png");
await sharp("public/assets/sipster/icon.png").resize(64, 64).png().toFile("public/assets/sipster/icon-64.png");

console.log("done");
