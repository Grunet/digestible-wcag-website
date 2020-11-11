module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["toml", "md", "png"]);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
