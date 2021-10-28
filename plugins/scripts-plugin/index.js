module.exports = function(context, options) {
  return {
    name: 'scripts-plugin',
    injectHtmlTags() {
      return {
        headTags: options.headTags || [],
        preBodyTags: options.preBodyTags || [],
        postBodyTags: options.postBodyTags || []
      };
    },

  };
};
