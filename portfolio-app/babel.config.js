module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'react-icons/fa': './node_modules/react-icons/fa',
          'react-icons/si': './node_modules/react-icons/si',
          'react-router-dom': './node_modules/react-router-dom'
        },
      },
    ],
  ],
};
