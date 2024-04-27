import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), playformCompress()]
});