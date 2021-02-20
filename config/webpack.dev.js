const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    inline: true,
    overlay: true,
    progress: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist')
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash:8].[ext]'
        }
      },
      {
        exclude: [/\.(js|s?css)$/, /\.html$/, /\.json$/],
        type: 'asset/resource',
        generator: {
          filename: 'medias/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      cache: false,
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}
