
module.exports = {
  transpileDependencies: true,
  css: {
    extract: true,
    loaderOptions: {
      css: {
        modules: {localIdentName: '[name]-[hash]', exportLocalsConvention: 'camelCaseOnly'},
      },
    },
  }
}
