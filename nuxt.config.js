module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: '2Tor4W1obw7fckURKS4QkQtt', cacheProvider: 'memory'}]
  ],

  css: [
    `./node_modules/bootstrap/dist/css/bootstrap.css`,
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-storyblock',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Building a Pre-Rendered Website With Nuxt.js and Storyblok' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    linkExactActiveClass: `is-active`,
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

