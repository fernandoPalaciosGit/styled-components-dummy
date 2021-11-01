module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/actions",
    "@storybook/addon-knobs",
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-contexts/register",
    "@storybook/addon-backgrounds/register"
  ]
}
