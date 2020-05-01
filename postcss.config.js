module.exports = {
  plugins: {
    //'postcss-import': {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': false
      }
    },
    'postcss-nested': require('postcss-nested'),
    //'cssnano': {},
    'autoprefixer': require('autoprefixer'),
  },
};
