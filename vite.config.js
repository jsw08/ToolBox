import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import monkey from "vite-plugin-monkey";

const wrapCODE = () => ({
  name: "wrap-code",
  generateBundle(_, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.code) {
        chunk.code = `/// main.js\n(()=>{${chunk.code}})()`;
      }
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ emitCss: false }), wrapCODE()],
});
