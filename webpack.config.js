module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    publicPath: '/assets',
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
		contentBase: "./public"
  }
};
