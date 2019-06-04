const pkg = require('./package')

module.exports = {
  mode: 'spa',
  srcDir: 'app',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Media Manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src : '@/plugins/vuetify' },
    { src : '@/aws-exports.js' },
    { src : '@/plugins/aws-amplify.js', ssr: false}
  ],

  /* Middleware*/
  router : {
    middleware: [
      'auth'
    ]
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
