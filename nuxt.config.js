module.exports = {
    head: {
        title: 'nuxt-blog',
        description: 'Personal Blog with Nuxt.js',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Personal Blog with Nuxt.js' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    srcDir: 'src/',
    build: {
        publicPath: '/nuxt-blog',
        vendor: ['axios']
    },
    loading: { color: 'cyan' },
    router: {
        base: '/nuxt-blog/',
        routes: [{
                name: 'index',
                path: '/',
                component: '@/pages/index.vue'
            },
            {
                name: 'about',
                path: '/about',
                component: '@/pages/about.vue'
            },
            // {
            //   name: 'post',
            //   path: '/post/:slug',
            //   component: 'pages/post.vue'
            // }
        ]
    },
    generate: {
        routes: [
            '/',
            '/about'
        ]
    },
    css: [
        'bulma',
        '@/assets/css/main.css'
    ],
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    }
}