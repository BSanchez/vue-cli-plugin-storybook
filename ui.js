module.exports = (api) => {
  api.describeTask({
    match: /vue-cli-service storybook:serve/,
    description: 'Launch Storybook',
    link: 'https://github.com/storybooks/storybook',
    icon: '/_plugin/vue-cli-plugin-storybook/storybook-logo.png'
  })
}
