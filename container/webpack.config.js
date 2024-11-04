const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: "development",
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            // MF Step 3: In Host, decide which files you want to get from Remote
            remotes: {
                productsApp : 'products@http://localhost:8081/remoteEntry.js',
                cartsApp : 'cart@http://localhost:8082/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template:  "./public/index.html"
        })
    ]
}