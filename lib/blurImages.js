import sharp from 'sharp';

export const getBlurredImage = async (src) => {
  const res = await fetch(src);
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
        resolve({
          imgData: `data:image/webp;base64,${base64Img}`,
          width,
          height,
        });
      });
  });
};
