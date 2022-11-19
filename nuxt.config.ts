import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  css: ['@/assets/css/main.css', '@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [svgLoader()]
  }
})
