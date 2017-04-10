const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin      = require('assets-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app', 'app.module.js'),
        vendor: path.join(__dirname, 'src', 'app', 'app.vendor.js')
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'js/[name].[chunkhash].js',
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'src', 'app')
                ],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'es2015' ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                include: [
                    path.join(__dirname, 'src', 'app')
                ],
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                import: true,
                                url: false,
                                minimize: true,
                                sourceMap: true,
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src', 'app')
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new AssetsPlugin({
            filename: 'webpack-assets.json',
            path: __dirname
        })
    ],
    devtool: 'source-map',
    target: 'web',
    profile: true,
    cache: true
}
