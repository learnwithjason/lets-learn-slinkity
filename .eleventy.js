const yaml = require('js-yaml');

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy('public');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
    },
  };
};
