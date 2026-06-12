import fs from "fs";
import path from "path";

async function copyAssets() {
  const workspaceRoot = process.cwd();
  const publicDir = path.join(workspaceRoot, "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
  const assetsDir = path.join(publicDir, "assets");
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

  const targets = [
    { src: "/input_file_0.png", dest: "input_file_0.png" },
    { src: "/input_file_1.png", dest: "input_file_1.png" },
    { src: "/input_file_2.png", dest: "input_file_2.png" },
    { src: "/input_file_3.png", dest: "input_file_3.png" },
  ];

  for (const t of targets) {
    if (fs.existsSync(t.src)) {
      console.log(`Direct Match Found: ${t.src}`);
      fs.copyFileSync(t.src, path.join(assetsDir, t.dest));
      console.log(`Copied to ${path.join(assetsDir, t.dest)}`);
    } else {
      console.log(`Not found via direct check: ${t.src}`);
    }
  }
}

copyAssets().catch(err => {
  console.error("Asset copying failed:", err);
});
