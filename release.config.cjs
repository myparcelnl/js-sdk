const {addGitHubPlugin, addGitPlugin} = require('@myparcel-dev/semantic-release-config/src/plugins');
const mainConfig = require('@myparcel-dev/semantic-release-config/npm');

module.exports = {
  ...mainConfig,
  extends: '@myparcel-dev/semantic-release-config/npm',
  plugins: [...mainConfig.plugins, addGitHubPlugin(), addGitPlugin()],
};
