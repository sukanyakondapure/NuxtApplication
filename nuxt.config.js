

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', type:'text/css',href:'http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600'}
    ],
    script:[
      { src: '/scripts/jquery-1.9.1.min.js',type:'text/javascript',body:true},
      { src: '/scripts/jquery-ui-1.10.1.custom.min.js',type:'text/javascript',body:true},
      { src: '/js/bootstrap.min.js',type:'text/javascript',body:true},
      { src: '/scripts/flot/jquery.flot.js',type:'text/javascript',body:true},
      { src: '/scripts/flot/jquery.flot.resize.js',type:'text/javascript',body:true},
      { src: '/scripts/datatables/jquery.dataTables.js',type:'text/javascript',body:true},
      { src: '/scripts/common.js',type:'text/javascript',body:true}
      
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
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/bootstrap/css/bootstrap-responsive.min.css',
    '~/assets/css/theme.css',
    '~/assets/images/icons/css/font-awesome.css',
    ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
   
 
 ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
  
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
