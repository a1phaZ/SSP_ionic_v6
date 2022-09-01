import { Meta, Story } from '@storybook/angular';

import { LoaderComponent } from './loader.component';
import {StorybookConst} from '../../shared/storybook.const';

export default {
	component: LoaderComponent,
	title: StorybookConst.app + ' Loader',
	excludeStories: /.*Data$/,
} as Meta;

const Template: Story = () => ({});

export const Default = Template.bind({});
