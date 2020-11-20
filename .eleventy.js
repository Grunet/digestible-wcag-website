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
      widths: [320, 640, 960, 1200, 1800, 2400],
      formats: ["webp", "jpeg"],
      urlPath: "/img/",
      outputDir: path.join(outputDir, "img"),
    });
    const lowestSrc = stats["jpeg"][0];

    // Iterate over formats and widths
    return `<picture>
              ${Object.values(stats)
                .map((imageFormat) => {
                  return `<source 
                            type="image/${imageFormat[0].format}" 
                            srcset="${imageFormat
                              .map((entry) => `${entry.url} ${entry.width}w`)
                              .join(", ")}" 
                          >`;
                })
                .join("\n")}
              <img
                src="${lowestSrc.url}"
                width="${lowestSrc.width}"
                height="${lowestSrc.height}"
                alt="${altAttr}">
            </picture>`;
  });

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};
