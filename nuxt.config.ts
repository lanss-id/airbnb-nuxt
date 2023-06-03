// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Airbnb Clone | lanss-id',
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
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/google-fonts'],
    css: ['~/assets/css/main.css'],
})
