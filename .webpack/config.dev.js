const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: {
    content: path.resolve(__dirname, '../src/content/index.ts'),
    background: path.resolve(__dirname, '../src/background/index.ts'),
    popup: path.resolve(__dirname, '../src/popup/index.ts')
  },

  output: {
    path: path.resolve(__dirname, '../extensions/dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          }
        ]
      },
      {
        test: /.css/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/popup/index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ],

  devtool: 'cheap-source-map',

  devServer: {
    writeToDisk: true,
  },
}
