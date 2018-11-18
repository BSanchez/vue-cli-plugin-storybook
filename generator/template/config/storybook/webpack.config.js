const { storyLoader } = require("vue-storybook"); // Import!
module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push(
    {
        resourceQuery: /blockType=story/,
        loader: storyLoader
      }
  );
  return storybookBaseConfig;
};
