const path = require("path");
const { promises: fs } = require("fs");

const pathToCssFile = path.join(__dirname, "index.css");

exports.data = async function () {
  const cssAsString = await fs.readFile(pathToCssFile);

  return {
    title: "WCAG of the Day",
    css: cssAsString,
  };
};

exports.render = function (data) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
      <style>${data.css}</style>
    </head>
    <body>
      ${data.content}
    </body>
  </html>`;
};
