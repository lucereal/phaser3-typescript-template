const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/game.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'assets'),
                to: path.resolve(__dirname, 'src', 'assets'),
                from: path.resolve(__dirname, 'src','assets'),
                to: path.resolve(__dirname, 'dist', 'assets')
            }
        ]),


    ]
}