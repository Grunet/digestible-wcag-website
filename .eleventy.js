const inputDir = "src";
const outputDir = "dist";

const path = require("path");
const escapeHtml = require("escape-html");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["toml", "md"]);

  __customizeMarkdownParser(eleventyConfig);

  eleventyConfig.addShortcode(
    "ImageProcessingShortcode",
    __createResponsiveImageHtmlAndFiles
  );

  return {
    dir: {
      input: inputDir,
      output: outputDir,
    },
  };
};

function __customizeMarkdownParser(eleventyConfig) {
  const eleventyDefaultParser = require("markdown-it")({ html: true });

  eleventyConfig.setLibrary(
    "md",
    eleventyDefaultParser.use(require("markdown-it-attrs"), {
      allowedAttributes: ["id"],
    })
  );
}

async function __createResponsiveImageHtmlAndFiles(pathToImage, altText) {
  if (altText === undefined) {
    throw new Error(`Missing \`alt\` on image from: ${pathToImage}`);
  }
  const altAttribute = escapeHtml(altText);

  const Image = require("@11ty/eleventy-img");
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
                          type="${imageFormat[0].sourceType}" 
                          srcset="${imageFormat
                            .map((entry) => entry.srcset)
                            .join(", ")}" 
                        >`;
              })
              .join("\n")}
            <img
              src="${lowestSrc.url}"
              width="${lowestSrc.width}"
              height="${lowestSrc.height}"
              alt="${altAttribute}">
          </picture>`;
}
