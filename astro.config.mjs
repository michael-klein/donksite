import { defineConfig } from "astro/config";

// https://astro.build/config
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
  integrations: [turbolinks()],

  markdown: {
    remarkPlugins: [],
    extendDefaultPlugins: true,
  },
});
