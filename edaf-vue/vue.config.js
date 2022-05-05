const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    // baseUrl: "edaf2/",
    transpileDependencies: true,
    publicPath: './',
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://edaf.sbs/',
                changeOrigin: true,
            }
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
            enableBridge: false
        }
    }
})