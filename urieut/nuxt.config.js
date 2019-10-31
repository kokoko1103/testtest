//기본적인곳 default
export default {
    head:{
      title:"메인페이지"
    },
    plugins: [{
              src:'~/plugins/ant-design-vue',
              ssr:true},{
                src:'~/plugins/vue-material',
                ssr:true
              }],
    buildModules:[
      '@nuxtjs/vuetify'
    ],
    vuetify:{

    },
    modules: [
      '@nuxtjs/axios'
    ],
    vueMaterial: {
      theme: 'default-dark'
    }
  }
