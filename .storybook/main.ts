const config = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: true,
    },
    stories: ['./stories/**/*.mdx', '../src/**/__stories__/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: [
        '@storybook/preset-scss',
        {name: '@storybook/addon-essentials', options: {backgrounds: false, actions: false}},
        './addons/addon-yaml/preset',
        './addons/theme-addon/register.tsx',
    ],
};

export default config;
