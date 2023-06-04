// https://nuxt.com/docs/api/configuration/nuxt-confignpm

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Airbnb Clone | lanss-id',
            link: [
                {
                    type: 'image/svg+xml',
                    rel: 'icon',
                    href: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-256.png',
                },
            ],
        },
    },
    components: [
        {
            path: '~/components',
            extensions: ['.vue'],
        },
    ],
    googleFonts: {
        families: {
            Poppins: [500, 600, 800],
        },
    },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts', 'nuxt-swiper'],
    css: ['~/assets/css/main.css'],
})
