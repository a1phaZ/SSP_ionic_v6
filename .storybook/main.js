module.exports = {
	// "stories": [
	//   "../src/**/*.stories.mdx",
	//   "../src/**/*.stories.@(js|jsx|ts|tsx)"
	// ],
	stories: ['../src/app/components/**/*.stories.ts'],
	actions: { argTypesRegex: '^on.*' },
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-css-user-preferences'
	],
	'framework': '@storybook/angular',
	'core': {
		'builder': '@storybook/builder-webpack5'
	}
}
