const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle filename
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matches both .js and .jsx files
        exclude: /node_modules/, // Excludes node_modules directory
        use: {
          loader: 'babel-loader', // Uses Babel to transpile JavaScript files
        },
      },
      {
        test: /\.tsx?$/, // Matches both .ts and .tsx files
        exclude: /node_modules/, // Excludes node_modules directory
        use: 'ts-loader', // Uses TypeScript loader
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolves these extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Directory for dev server
    compress: true, // Enables gzip compression
    port: 9000, // Port for the dev server
  },
};
