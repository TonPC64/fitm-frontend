const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  loading: '~components/loading.vue',
  // loading: {
  //   color: '#3B8070',
  //   height: '5px'
  // },
  css: [
    '~assets/css/bootstrap.css',
    '~assets/css/scrolling-nav.css',
    '~assets/css/circle.css',
    '~assets/css/freelancer.css',
    '~assets/css/owl.theme.default.css'
  ],
  head: {
    title: 'IT@KMUTNB',
    bodyAttrs: {
      class: 'page-top'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400' },
      { rel: 'stylesheet', href: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59042e03582c5cb1' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.css' }
    ],
    script: [
      { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyADBCsZBvm32AVkHT75YYGMKVVWRinTNx0&callback=initMap' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.carousel.min.js'}

    ]
  },
  /*
  ** Customize the progress-bar color
  */
  /*
  ** Build configuration
  */
  plugins: [
    {src: '~plugins/api', ssr: true},
    {src: '~plugins/firebase', ssr: false}
  ],
  build: {
    vendor: ['axios', 'vue-axios', 'firebase'],
    // plugins: [
    //   // set shortcuts as global for bootstrap
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   })
    // ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
