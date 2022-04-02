const path = require('path')
const glob = require("glob")
const HtmlWebpackPlugin = require('html-webpack-plugin')


// MPA：使用glob动态遍历文件 返回enty对象 和 HtmlWebpackPlugins数组
const getMpa = () => {
  let entry = {}
  let HtmlWebpackPlugins = []
  const entryFiles = glob.sync(path.join(__dirname, "./src/*.js"))
  entryFiles.forEach(file => {
    const entryFile = file
    const match = entryFile.match(/src\/(.*)\.js$/)
    const pageName = match[1]
    entry[pageName] = entryFile
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `./index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    )
  })

  return {
    entry,
    HtmlWebpackPlugins
  }
}

const { entry, HtmlWebpackPlugins } = getMpa()


module.exports = {
  mode: 'development',
  entry,
  output: {
    path: path.join(__dirname, './release'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    ...HtmlWebpackPlugins
    /*
    // SPA时
    new HtmlWebpackPlugin({
      template: './index.html'
    })
    */
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, './release'),
    },
    open: true,
    port: 9000
  }
}
