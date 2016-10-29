 module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    path: 'dist',
    publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  devServer: {
    host: '0.0.0.0',
		contentBase: "./"
  }
};
