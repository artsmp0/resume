// uno.config.ts
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetIcons()],
  shortcuts: [
    ["fvc", "flex items-center"],
    ["fhc", "flex justify-center"],
    [
      "link",
      "border-b border-dashed border-#0005 hover:text-emerald-700 transition hover:border-emerald-700",
    ],
  ],
  safelist: [
    "i-carbon-phone",
    "i-carbon-email",
    "i-carbon-education",
    "i-carbon-location",
    "i-carbon-agriculture-analytics",
  ],
});
