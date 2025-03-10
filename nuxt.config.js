module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'e-commerce website template',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',

            }
        ]
    },
    css: [
        '@/assets/css/style.css',
        '@/assets/css/custom.css',
        '@/assets/css/tabs.css',
    ],
    js: [
    ],
    buildModules: [
      '@nuxtjs/tailwindcss',
    ],
    modules: [
        [
            'nuxt-fontawesome', {
                imports: [
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    },
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    }
                ]
            }
        ],
        ['bootstrap-vue/nuxt']
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {
        color: '#3B8070'
    }
    ,
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
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

