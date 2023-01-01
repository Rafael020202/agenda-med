module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  };
};
