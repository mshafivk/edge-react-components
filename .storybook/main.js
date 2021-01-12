module.exports = {
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: { localIdentName: "[local]___[hash:base64:5]" },
          },
        },
        {
          loader: "less-loader",
        },
      ],
    });
    return config;
  },
};
