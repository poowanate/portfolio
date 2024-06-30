// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Poowanate',
     
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
    
  },
 
  devtools: { enabled: true },
  //tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  plugins: [
    { src: '~/plugins/fontawesome.js', ssr: false },
    { src: '~/plugins/sweetalert2.js' },
  ],
 
  css: [ '~/assets/css/main.css',
  '@fortawesome/fontawesome-svg-core/styles.css' ,
  ],

  runtimeConfig:{
    public: {
      apiBase: 'http://localhost:80/PHP-API/api/v1/post'
    }
  },

  
 
})



