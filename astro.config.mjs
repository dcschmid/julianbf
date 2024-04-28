import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.julianbf.de",
  integrations: [mdx(), playformCompress(), sitemap()],
});
