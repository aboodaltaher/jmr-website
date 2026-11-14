// Generates print-ready QR codes for https://agec.ae/review (job cards, AMC
// certificates). Output: public/assets/review-qr/agec-review-qr.{png,svg}.
//
// The QR encodes the SHORT link, not the Google URL, so the printed code keeps
// working if the Google review link ever changes (edit src/data/business.ts;
// /review redirects to it). Re-run only if the short URL changes:
//   node scripts/generate-review-qr.mjs
import QRCode from "qrcode";
import { mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const URL_TO_ENCODE = "https://agec.ae/review";
const outDir = resolve(dirname(fileURLToPath(import.meta.url)), "../public/assets/review-qr");
mkdirSync(outDir, { recursive: true });

const opts = {
  errorCorrectionLevel: "H", // survives scuffs / small logo overlays
  margin: 4,                 // 4-module quiet zone (the QR spec minimum)
  color: { dark: "#000000", light: "#FFFFFF" },
};

// Vector: scales to any print size without loss.
await QRCode.toFile(resolve(outDir, "agec-review-qr.svg"), URL_TO_ENCODE, { ...opts, type: "svg" });
// Raster: 1800 px square = 15 cm at 300 dpi.
await QRCode.toFile(resolve(outDir, "agec-review-qr.png"), URL_TO_ENCODE, { ...opts, type: "png", width: 1800 });

console.log("wrote", outDir);
