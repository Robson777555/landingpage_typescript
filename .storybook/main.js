export default {
  stories: ['../src/**/*stories.@(js|jsx|ts|tsx)'], // Removed the dot before "stories"
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    /* {
      name: '@storybook/addon-styling',
      options: { postCss: true },
    }, */
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true,
    buildStoriesJson: true,
  },
};