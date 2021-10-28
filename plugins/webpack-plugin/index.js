const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = function(context, options) {
  return {
    name: 'webpack-plugin',
    configureWebpack(config, isServer) {
      return {
        plugins: [new WebpackManifestPlugin({
          writeToFileEmit: true,
          removeKeyHash: false,
          map: (file) => {
            return file;
          },
        })]
      };
    },
  };
};
