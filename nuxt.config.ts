import { repositoryName } from "./slicemachine.config.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: false as any,
  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/faviconOne.ico" },
        { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.4/dist/aos.css" },
      ],
    },
  },

  modules: ["@nuxtjs/prismic", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

  routeRules: {
    "/": { prerender: true },
    "/about": { isr: 1800 },
    "/school": { isr: 1800 },
    "/services": { isr: 1800 },
    "/contacts" : { swr: true},
  },

  prismic: {
    endpoint: "footabll-coaching",
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "page",
          uid: "home",
          path: "/",
        },
      ],
    },
  },
});
