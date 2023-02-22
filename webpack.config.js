module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        }
    },
    externals: {
        'vue': 'Vue'
    }
}