import fs from 'fs';
import path from 'path';

export function listVideoSlugs() {
  const publicVideosDir = path.join(process.cwd(), 'public', 'videos');
  try {
    const files = fs.readdirSync(publicVideosDir);
    const exts = ['.webm', '.mp4', '.ogg'];
    const slugs = files
      .filter((f) => exts.includes(path.extname(f).toLowerCase()))
      .map((f) => path.basename(f, path.extname(f)));
    return slugs;
  } catch (err) {
    return [];
  }
}

export function readVideoMetadata() {
  const metaPath = path.join(process.cwd(), 'public', 'videos', 'projects.json');
  try {
    if (!fs.existsSync(metaPath)) return {};
    const raw = fs.readFileSync(metaPath, 'utf8');
    const parsed = JSON.parse(raw);
    // Expecting an object keyed by slug
    if (parsed && typeof parsed === 'object') {
      // Normalize image paths: if image is an absolute filesystem path or contains /public/,
      // convert it to a public URL under /videos or keep as-is if already a public path.
      Object.keys(parsed).forEach((k) => {
        const item = parsed[k];
        if (item && item.image && typeof item.image === 'string') {
          const img = item.image;
          // If it already looks like a web path (starts with /), leave it.
          if (img.startsWith('/')) {
            // If it includes '/public/' or appears to be an absolute fs path, normalize to /videos/<basename>
            if (img.includes(path.join('public', path.sep)) || img.startsWith(process.cwd())) {
              item.image = `/videos/${path.basename(img)}`;
            }
          } else if (path.isAbsolute(img) || img.includes(path.join('public', path.sep))) {
            item.image = `/videos/${path.basename(img)}`;
          }
        }
      });
      return parsed;
    }
    return {};
  } catch (err) {
    return {};
  }
}
