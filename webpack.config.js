module.exports = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babelplugin-transform-react-jsx', {pragram: 'createElement'}]]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
}