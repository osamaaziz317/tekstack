import React from 'react';
import fs from 'fs';
import path from 'path';

interface Props {
  params: { name: string };
}

export default function VideoPage({ params }: Props) {
  const { name } = params;

  const publicVideosDir = path.join(process.cwd(), 'public', 'videos');
  const exts = ['webm', 'mp4', 'ogg'];

  const available = exts
    .map((ext) => ({
      ext,
      fullPath: path.join(publicVideosDir, `${name}.${ext}`),
    }))
    .filter((x) => fs.existsSync(x.fullPath))
    .map((x) => ({ src: `/videos/${name}.${x.ext}`, type: x.ext === 'mp4' ? 'video/mp4' : x.ext === 'ogg' ? 'video/ogg' : 'video/webm', ext: x.ext }));

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-4 text-center">
          <h1 className="text-2xl font-semibold">Demo Video: {name.replace(/[-_]/g, ' ')}</h1>
        </div>

        {available.length > 0 ? (
          <video className="w-full rounded-lg bg-black" controls autoPlay playsInline>
            {available.map((s) => (
              <source key={s.src} src={s.src} type={s.type} />
            ))}
            <p>Your browser does not support the HTML5 Video element.</p>
          </video>
        ) : (
          <div className="p-6 bg-white/5 rounded-lg">
            <p className="text-gray-300 mb-3">
              No demo video was found for <strong>{name}</strong>.
            </p>
            <p className="text-sm text-gray-400">
              Place a video file named <strong>{name}.webm</strong> (or {exts.map((e) => `${name}.${e}`).join(', ')}) in <strong>/public/videos/</strong> and reload.
            </p>
          </div>
        )}

        <p className="mt-4 text-sm text-gray-300 text-center">
          Files should be placed in <strong>/public/videos/</strong>. Filenames are case-sensitive on Linux.
        </p>
      </div>
    </div>
  );
}
