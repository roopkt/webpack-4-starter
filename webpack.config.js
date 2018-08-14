const { resolve } = require('path')
module.exports = env => {
    return {
        entry: './js/app.js',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist')
        },
        context: resolve(__dirname, 'src'),
        devServer: {
            contentBase: resolve(__dirname, 'dist'),
            compress: true,
            port: 4210
        }
    }
}