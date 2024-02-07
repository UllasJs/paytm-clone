// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["/assets/css/index.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: 'stylesheet',
          href: 'href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"'
        }
      ],
    },
  },
});
