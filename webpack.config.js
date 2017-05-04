var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/Control.GlobeMiniMap.js',

  externals: {
    d3: {
      amd: 'd3',
      commonjs: 'd3',
      commonjs2: 'd3',
      root: 'd3',
    },
    leaflet: {
      amd: 'leaflet',
      commonjs: 'leaflet',
      commonjs2: 'leaflet',
      root: 'L',
    },
    'topojson-client': {
      amd: 'topojson-client',
      commonjs: 'topojson-client',
      commonjs2: 'topojson-client',
      root: 'topojson',
    },
  },

  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
    }],
  },

  output: {
    filename: 'Control.GlobeMiniMap.min.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
}
