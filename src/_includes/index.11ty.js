const path = require("path");
const { promises: fs } = require("fs");

const CleanCSS = require("clean-css");

exports.data = async function () {
  const pathToCssFile = path.join(__dirname, "index.css");
  const cssAsString = await fs.readFile(pathToCssFile);
  const minifiedCss = new CleanCSS({ level: { 2: { all: true } } }).minify(
    cssAsString
  ).styles;

  return {
    title: "Digestible WCAG", //Matching the Mailchimp subscription page titles
    description:
      "Daily email service for WCAG, delivering short, summarized versions of success criterion documentation to help with learning",
    css: minifiedCss,
  };
};

exports.render = function (data) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="${data.description}">
      <title>${data.title}</title>
      <style>${data.css}</style>
    </head>
    <body>
      <main>
        ${data.content}
      </main>
    </body>
  </html>`;
};
