// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://apou.legxcysol.dev",
  trailingSlash: "never",
  adapter: vercel({ imageService: false }),
  integrations: [sitemap()],
  markdown: { syntaxHighlight: false },
  vite: { plugins: [tailwindcss()] },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: ["300", "400"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Sans",
      cssVariable: "--font-instrument",
      weights: ["400", "600"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
  ],

  image: {
    layout: "constrained",
    responsiveStyles: true,
  },

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "upgrade-insecure-requests",
      ],
    },
  },

  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
      CONTACT_TO: envField.string({
        context: "server",
        access: "secret",
        default: "graham@apictureofyou.co.uk",
      }),
      CONTACT_FROM: envField.string({
        context: "server",
        access: "secret",
        default: "A Picture of You <website@legxcysol.dev>",
      }),
    },
  },
});
