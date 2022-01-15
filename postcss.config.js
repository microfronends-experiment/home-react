// postcss.config.js
const prefixer = require("postcss-prefix-selector");

module.exports = {
  plugins: [
    prefixer({
      prefix: "#single-spa-application\\:\\@personal\\/react-app",
    }),
  ],
};
