// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },

  // markdown: {
  //   shikiConfig: {
  //     theme: 'nord',
  //   },
  // },
  // image: {
  //   service: imageService({
  //     placeholder: "blurhash",
  //   }),
  // }
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  adapter: vercel(),
});