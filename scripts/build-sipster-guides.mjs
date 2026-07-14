import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REF = path.resolve(ROOT, "../../Sipster SEO Website/website/guides");
const OUT = path.resolve(ROOT, "public/apps/sipster/guides");

const SITE = "https://kelotech.fi";

const replacements = [
  [/https:\/\/sipsterapp\.com\/images\//g, `${SITE}/assets/sipster/`],
  [/https:\/\/sipsterapp\.com\//g, `${SITE}/apps/sipster/`],
  [/https:\/\/sipsterapp\.com/g, SITE],
  [/\.\.\/index\.html/g, "/apps/sipster/index.html"],
  [/\/apps\/sipster\/(?!index\.html|guides|css|party-game-app)/g, "/apps/sipster/index.html"],
  [/\.\.\/images\//g, "/assets/sipster/"],
  [/app-icon\.png/g, "icon.png"],
  [/\.\.\/css\/style\.css/g, "/apps/sipster/css/style.css"],
  [/href="guides\//g, 'href="/apps/sipster/guides/'],
  [new RegExp(`${SITE.replace(/\./g, "\\.")}/apps/sipster/images/`, "g"), `${SITE}/assets/sipster/`],
  [
    /<span>© 2026 KeloTech Group Oy\. <a href="\/apps\/sipster\/">kelotech\.fi\/apps\/sipster<\/a><\/span>/g,
    `<span>© 2026 KeloTech Group Oy · <a href="/">KeloTech</a> · <a href="/apps/sipster/">Sipster</a></span>`,
  ],
  [
    /<a class="brand" href="\/apps\/sipster\/">/g,
    `<a class="brand" href="/apps/sipster/">`,
  ],
];

fs.mkdirSync(OUT, { recursive: true });

for (const file of fs.readdirSync(REF).filter((f) => f.endsWith(".html"))) {
  let html = fs.readFileSync(path.join(REF, file), "utf8");
  html = html.replace(
    /<a class="brand" href="[^"]*">\s*<img[^>]*>\s*Sipster\s*<\/a>/,
    `<a class="brand" href="/apps/sipster/index.html">
        <img src="/assets/sipster/icon.png" alt="Sipster party game app icon" width="38" height="38">
        Sipster
      </a>`
  );
  html = html.replace(
    /<link rel="icon"[^>]*>/,
    `<link rel="icon" type="image/png" href="/assets/sipster/icon-64.png">`
  );
  for (const [from, to] of replacements) {
    html = html.replace(from, to);
  }
  html = html.replace("<body>", '<body class="app-sipster">');
  html = html.replace(
    /<nav class="main-nav" aria-label="Main navigation">[\s\S]*?<\/nav>/,
    `<nav class="main-nav" aria-label="Main navigation">
        <a class="nav-home" href="/">← KeloTech Home</a>
        <a class="nav-cta" href="https://apps.apple.com/app/party-games-sipster/id6756325849" rel="noopener">Download Free</a>
      </nav>`
  );
  html = html.replace(/href="\/apps\/sipster\/"/g, 'href="/apps/sipster/index.html"');
  html = html.replace(/href="\/apps\/sipster\/#/g, 'href="/apps/sipster/index.html#');
  fs.writeFileSync(path.join(OUT, file), html);
  console.log("wrote", file);
}

console.log("done");
