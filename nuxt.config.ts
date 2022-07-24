import { defineNuxtConfig } from 'nuxt';
import config from './.config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
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
  modules: ['@nuxtjs/i18n'],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
      'postcss-custom-properties': {},
      'postcss-import': {},
      'tailwindcss/nesting': {},
      ...(config.dev ? {} : { cssnano: {} }),
    },
  },
  telemetry: false,
});
