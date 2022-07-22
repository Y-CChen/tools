import { defineNuxtConfig } from 'nuxt';
import config from './.config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  i18n: {
    // ERROR
    // detectBrowserLanguage: {
    //   useCookie: false,
    // },
    langDir: './locales',
    lazy: true,
    locales: config.locales,
    defaultLocale: config.defaultLocale,
    vueI18n: {
      legacy: false,
      fallbackLocale: config.defaultLocale,
    },
  },
  tailwind: {},
  telemetry: false,
});
