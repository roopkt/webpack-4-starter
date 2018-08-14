const { resolve } = require('path')
module.exports = function () {
    return {
        entry: './js/app.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist')
        },
        context: resolve(__dirname, 'src')
    }
}