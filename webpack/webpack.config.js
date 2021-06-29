const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', //aqui define se é a versão final ou a versão de desenvolvimento
    entry: './src/principal.js', //arquivo de entrada
    output: {
        filename: 'principal.js', //arquivo de saída
        path: __dirname + '/public' //pasta de saída
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{ //regra que trabalha com arquivos css
            test: /\.s?[ac]ss$/, //expressão Regex para reconhecer formatos css e scss
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS à dom injetando tag <style>
                'css-loader', //interpreta @import, url()...
                'sass-loader'
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/, //expressão para reconhecer formatos de imagem
            use: [
                'file-loader'
            ]
        }]
    }
}

