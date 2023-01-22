import { defineConfig } from "astro/config";

// https://astro.build/config
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [turbolinks()]
});