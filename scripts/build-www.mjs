// Copies the web app into www/, the folder Capacitor bundles into the iOS app.
// index.html stays at the repo root so GitHub Pages keeps serving it unchanged.
import { mkdirSync, copyFileSync, rmSync } from "node:fs";
rmSync("www", { recursive: true, force: true });
mkdirSync("www", { recursive: true });
copyFileSync("index.html", "www/index.html");
console.log("Copied index.html to www/");
