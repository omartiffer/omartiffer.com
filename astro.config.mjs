// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { remarkStripNotesFooter } from "./src/plugins/remark-strip-notes-footer.ts";
import { rehypeRewriteNotesLinks } from "./src/plugins/rehype-rewrite-notes-links.ts";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://omartiffer.com",
  trailingSlash: "never",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkStripNotesFooter],
    rehypePlugins: [rehypeRewriteNotesLinks],
  },
});
