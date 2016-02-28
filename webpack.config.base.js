const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/js/index.js'
  },
  output: {
    filename: 'index.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.sass']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'jsx'
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loader: 'sass-variables'
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc',
    failOnError: true,
    emitError: true
  }
};
