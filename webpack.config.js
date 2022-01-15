const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "personal",
    projectName: "react-app",
    webpackConfigEnv,
    argv,
  });

  const customConfig = {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
      ],
    },
  };

  return merge(defaultConfig, customConfig);
};
