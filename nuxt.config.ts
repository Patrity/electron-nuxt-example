// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-electron'
    ],
    electron: {
        build: [
            {
                // Main-Process entry file of the Electron App.
                entry: 'electron/main.ts',
            },
        ],
    }

})
