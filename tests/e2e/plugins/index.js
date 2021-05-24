module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  return {
    ...config,
    fixturesFolder: 'tests/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js',
  };
}
