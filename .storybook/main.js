const path = require('path');

module.exports = {
  stories: ['../components/**/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-jest',
    '@storybook/addon-postcss',
  ],
};
