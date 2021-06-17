import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

export const getBlurredImage = async (src) => {
  let blurCache = null;

  const data = readFileSync('public/blur-database.json');
  blurCache = JSON.parse(data);

  if (src in blurCache) {
    console.log('returned cache');
    return blurCache[src];
  }

  const res = await fetch(src);
  console.log('fetch');
  const buffer = await res.arrayBuffer();
  return new Promise((resolve, reject) => {
    sharp(new Uint8Array(buffer))
      .ensureAlpha()
      .resize(960, null, { fit: 'inside' })
      .blur(100)
      // .jpeg({ mozjpeg: true, quality: 60, progressive: true })
      .webp({ quality: 60 })
      .toBuffer((err, buffer, { width, height }) => {
        err && reject(err);
        const base64Img = buffer.toString('base64');
        const blurObj = {
          imgData: `data:image/webp;base64,${base64Img}`,
          width,
          height,
        };
        blurCache[src] = blurObj;
        writeFileSync('public/blur-database.json', JSON.stringify(blurCache));
        resolve(blurObj);
      });
  });
};
