import "server-only";
import fs from "fs";
import path from "path";

const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;
const MAX_PHOTOS = 10;

/**
 * Photos for a case study, read from public/projects/{slug}/ at build time
 * (sorted by file name, at most 10). An empty or missing folder returns [].
 */
export function getProjectPhotos(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => IMAGE_EXT.test(f))
      .sort()
      .slice(0, MAX_PHOTOS)
      .map((f) => `/projects/${slug}/${f}`);
  } catch {
    return [];
  }
}
