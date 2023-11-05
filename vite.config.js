import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const wrapCODE = () => ({
  name: "wrap-code",
  generateBundle(_, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.code) {
        chunk.code = `/// main.js\naddEventListener("DOMContentLoaded",()=>{${chunk.code}});`;
      }
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ emitCss: false }), wrapCODE()],
});
