import { Meta, Story } from '@storybook/angular';

import { LoaderComponent } from './loader.component';

export default {
	component: LoaderComponent,
	title: 'App / Loader',
	excludeStories: /.*Data$/,
} as Meta;

const Template: Story = () => ({});

export const Default = Template.bind({});
