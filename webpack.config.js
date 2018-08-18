const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');


module.exports = {
  entry: ['./src/app.scss'],
  output: {
      path: path.resolve(__dirname, "dist")     
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  module: {
      rules: [
          {
              test: /\.scss$/, 
              use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
              ]
          },

          {
            test: /\.(png|jp(e*)g|svg)$/, 
            use: [
              {
                loader: 'url-loader',
                options: { 
                    limit: 8, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }
            ]     

          }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'nm.min.css'
      
    })
  ]
  
};