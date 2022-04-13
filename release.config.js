const {addGitHubPlugin, addGitPlugin, addNpmPlugin} = require('@myparcel/semantic-release-config/src/plugins');
const mainConfig = require('@myparcel/semantic-release-config/npm');

module.exports = {
  ...mainConfig,
  extends: '@myparcel/semantic-release-config/npm',
  plugins: [...mainConfig.plugins, addNpmPlugin(), addGitHubPlugin(), addGitPlugin()],
};
