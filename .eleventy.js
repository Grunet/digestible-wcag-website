module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "png"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
