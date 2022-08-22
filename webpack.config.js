const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    entry: {
        frontend: "./frontend/src/index.tsx",
        backend: './frontend/src/index.tsx'
    },
    output: {
        path: path.resolve("./frontend/static/frontend/"),
        filename: "[name]-[hash].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleTracker({
            path: __dirname,
            filename: "./webpack-stats.json",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
            },

        ],
    },
};