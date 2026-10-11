import fs from 'fs';
import path from 'path';

export interface VideoProjectMeta {
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
  liveLink?: string;
  category?: string;
}

export interface VideoSource {
  src: string;
  type: string;
  ext: string;
}

export interface VideoProjectDetails {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  sources: VideoSource[];
}

export function listVideoSlugs(): string[] {
  const publicVideosDir = path.join(process.cwd(), 'public', 'videos');
  try {
    if (!fs.existsSync(publicVideosDir)) return [];
    const files = fs.readdirSync(publicVideosDir);
    const exts = ['.webm', '.mp4', '.ogg'];
    const slugs = files
      .filter((f) => exts.includes(path.extname(f).toLowerCase()))
      .map((f) => path.basename(f, path.extname(f)));
    return Array.from(new Set(slugs));
  } catch {
    return [];
  }
}

export function readVideoMetadata(): Record<string, VideoProjectMeta> {
  const metaPath = path.join(process.cwd(), 'public', 'videos', 'projects.json');
  try {
    if (!fs.existsSync(metaPath)) return {};
    const raw = fs.readFileSync(metaPath, 'utf8');
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      const result: Record<string, VideoProjectMeta> = {};
      Object.keys(parsed).forEach((k) => {
        const item = parsed[k];
        if (item && typeof item === 'object') {
          let imagePath = item.image || '/videos/AI_s-impact-on-HR_Sharing-image.png';
          if (imagePath.includes('public/')) {
            imagePath = `/videos/${path.basename(imagePath)}`;
          }
          result[k] = {
            title: item.title,
            description: item.description,
            tags: Array.isArray(item.tags) ? item.tags : ['Agentic AI'],
            image: imagePath,
            liveLink: item.liveLink,
            category: item.category || 'ai',
          };
        }
      });
      return result;
    }
    return {};
  } catch {
    return {};
  }
}

export function getVideoProject(rawSlug: string): VideoProjectDetails | null {
  const metadata = readVideoMetadata();
  const availableSlugs = listVideoSlugs();
  const publicVideosDir = path.join(process.cwd(), 'public', 'videos');
  const exts = ['webm', 'mp4', 'ogg'];

  // Normalize slug matching to handle underscores vs hyphens vs case differences
  const normalizedTarget = rawSlug.toLowerCase().replace(/[-_]/g, '');

  let matchedSlug = availableSlugs.find(
    (s) => s.toLowerCase().replace(/[-_]/g, '') === normalizedTarget
  );

  if (!matchedSlug) {
    matchedSlug = Object.keys(metadata).find(
      (s) => s.toLowerCase().replace(/[-_]/g, '') === normalizedTarget
    );
  }

  const finalSlug = matchedSlug || rawSlug;
  const meta = metadata[finalSlug] || {};

  // Scan file system for available video source formats
  const sources: VideoSource[] = [];
  for (const ext of exts) {
    const fullPath = path.join(publicVideosDir, `${finalSlug}.${ext}`);
    if (fs.existsSync(fullPath)) {
      sources.push({
        src: `/videos/${finalSlug}.${ext}`,
        type: ext === 'mp4' ? 'video/mp4' : ext === 'ogg' ? 'video/ogg' : 'video/webm',
        ext,
      });
    }
  }

  // Also check if any known public video can act as fallback
  if (sources.length === 0 && availableSlugs.length > 0) {
    const fallbackSlug = availableSlugs[0];
    for (const ext of exts) {
      const fullPath = path.join(publicVideosDir, `${fallbackSlug}.${ext}`);
      if (fs.existsSync(fullPath)) {
        sources.push({
          src: `/videos/${fallbackSlug}.${ext}`,
          type: ext === 'mp4' ? 'video/mp4' : ext === 'ogg' ? 'video/ogg' : 'video/webm',
          ext,
        });
      }
    }
  }

  return {
    slug: finalSlug,
    title: meta.title || finalSlug.replace(/[-_]/g, ' '),
    description:
      meta.description ||
      'Autonomous system architecture and multi-agent execution pipeline demo.',
    tags: meta.tags || ['Agentic AI', 'Workflow Automation', 'Production Demo'],
    image: meta.image || '/videos/AI_s-impact-on-HR_Sharing-image.png',
    liveLink: meta.liveLink,
    sources,
  };
}
