module.exports = {
     context: __dirname,
    entry: "./src/index.js",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: "babel-loader" }
        ]
    }
}