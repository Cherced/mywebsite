const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube. es de node 
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyWebpackPlugin = require('copy-webpack-plugin'); //Archivo necesario para trabajar con css.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Archivo necesario para trabajar con css.
const Dotenv = require('dotenv-webpack');

module.exports = { //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
    entry: './src/index.js', //Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/image/[hash][ext][query]'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js'],
        alias: {
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@templates': path.resolve(__dirname, 'src/templates/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@images': path.resolve(__dirname, 'src/assets/images/'),
        }
    },
    module: { //Se crea un modulo con las reglas necesarias que vamos a utilizar.
        rules: [ //Reglas
            { // Estructura de Babel
                test: /\.m?js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                exclude: /node_modules/, //Excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader', //Utilizar un loader como configuración establecida.
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: "application/font-woff",
                        name: "[name].[contenthash].[ext]",
                        outputPath: "./assets/fonts/",
                        publicPath: "../assets/fonts/",
                        esModule: false,
                    },
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [ //Establecemos los plugins que vamos a utilizar
        new HtmlWebpackPlugin( //Permite trabajar con los archivos HTML
            {
                inject: true, //Cómo vamos a inyectar un valor a un archivo HTML.
                template: './public/index.html', //Dirección donde se encuentra el template principal
                filename: './index.html' //El nombre que tendrá el archivo
            }
        ),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                    from: path.resolve(__dirname, "src", "assets/image"),
                    to: "assets/image"
                },
                {
                    from: path.resolve(__dirname, "src", "styles/css"),
                    to: "css/styles.css"
                }
            ]
        }),
        // new Dotenv(),
    ],
    devServer: {
        static: 
        {
          directory: path.join(__dirname, "dist"),
          watch: true,
        },
        watchFiles: path.join(__dirname, "./**"), //observa los cambios en todos nuestros archivos y actualiza el navegador
        compress: true,
        historyApiFallback: true,
        port: 3006,
        open: true, //Hace que se abra en el navegador
      },
}