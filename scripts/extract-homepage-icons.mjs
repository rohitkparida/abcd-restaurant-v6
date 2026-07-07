import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const source = 'reference/source-assets/create-landing-page/src/imports/AbcdHome';
const destination = 'public/assets/home';
const icons = [
  { file: '7b39eb5c358352ef352fed2eb51f047c09f3f888.png', out: 'cat-app.png', top: 0, height: 139 },
  { file: 'd70c1af66977c0f483e9f9f6a412bb2992ead983.png', out: 'cat-biryani.png', top: 240, height: 1030 },
  { file: 'd0bbd0cfd170022453577ae5e2817b414922dcaf.png', out: 'cat-curry.png', top: 0, height: 1780, keyBackground: true },
  { file: '89ba94e5e3988e5ea70889f1550a4778df29f1a4.png', out: 'cat-indo.png', top: 180, height: 1430 },
  { file: 'b15b8c688878abb1ce1cb8c00bdd29342c213a5a.png', out: 'cat-dragon.png', top: 80, height: 1330 },
  { file: 'c26278b4383225135351e4bd7ae317dc1a6e33d3.png', out: 'cat-dessert.png', top: 80, height: 1470 },
  { file: '3966aba6a8c88249fedcc1fd19a7fc9ac9d1a01b.png', out: 'cat-drink.png', top: 70, height: 1880 },
];

await mkdir(destination, { recursive: true });
for (const icon of icons) {
  let image = sharp(path.join(source, icon.file)).extract({ left: 0, top: icon.top, width: (await sharp(path.join(source, icon.file)).metadata()).width, height: icon.height }).ensureAlpha();
  if (icon.keyBackground) {
    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
    const background = [data[0], data[1], data[2]];
    for (let offset = 0; offset < data.length; offset += 4) {
      const distance = Math.hypot(data[offset] - background[0], data[offset + 1] - background[1], data[offset + 2] - background[2]);
      data[offset + 3] = distance < 18 ? 0 : distance < 42 ? Math.round(((distance - 18) / 24) * data[offset + 3]) : data[offset + 3];
    }
    image = sharp(data, { raw: info });
  }
  await image.trim({ background: { r: 248, g: 240, b: 228, alpha: 0 } }).png().toFile(path.join(destination, icon.out));
  const metadata = await sharp(path.join(destination, icon.out)).metadata();
  console.log(`${icon.out}: ${metadata.width}×${metadata.height}`);
}
