const path = require('path');
const moduleResolver = require('./module-resolver');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Handle ESM modules in react-icons and react-router-dom
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });
      
      // Add module resolver aliases
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        ...moduleResolver.alias
      };
      
      // Enable node polyfills
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        stream: require.resolve('stream-browserify'),
        crypto: require.resolve('crypto-browserify'),
        buffer: require.resolve('buffer/'),
        assert: require.resolve('assert/'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        url: require.resolve('url/'),
        path: require.resolve('path-browserify'),
      };
      
      // Fix for ESM modules
      webpackConfig.resolve.extensionAlias = {
        '.js': ['.js', '.jsx', '.ts', '.tsx'],
        '.mjs': ['.mjs', '.mts'],
        '.cjs': ['.cjs', '.cts'],
      };

      return webpackConfig;
    },
  },
};
