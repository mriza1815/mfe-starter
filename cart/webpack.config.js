const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 8082
    },
    plugins: [
        // MF Step 1: In Remote, decide which modules(files) you want to make available to other projects
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            // MF Step 2: Set up this plugin to expose this files
            exposes: {
                './CartShow' : './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template:  "./public/index.html"
        })
    ]
}