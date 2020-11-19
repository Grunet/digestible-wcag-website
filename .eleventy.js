const inputDir = "src";
const outputDir = "dist";

const path = require("path");

const Image = require("@11ty/eleventy-img");
const escapeHtml = require("escape-html");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["toml", "md"]);

  eleventyConfig.addShortcode("ImageProcessingShortcode", async function (
    pathToImage,
    altText
  ) {
    if (altText === undefined) {
      throw new Error(`Missing \`alt\` on image from: ${pathToImage}`);
    }
    const altAttr = escapeHtml(altText);

    const stats = await Image(path.join(inputDir, pathToImage), {
      formats: ["webp"],
      urlPath: "/img/",
      outputDir: path.join(outputDir, "img"),
    });
    let props = stats["webp"].pop();

    return `<img src="${props.url}" width="${props.width}" height="${props.height}" alt="${altAttr}">`;
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
