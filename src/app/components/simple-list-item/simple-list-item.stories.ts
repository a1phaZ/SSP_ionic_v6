import {Meta, Story} from '@storybook/angular';
import {SimpleListItemComponent} from './simple-list-item.component';
import {StorybookConst} from '../../shared/storybook.const';

export default {
	component: SimpleListItemComponent,
	title: StorybookConst.indicators + StorybookConst.elements,
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const simpleItem = template.bind({});
simpleItem.args = {
	item: {
		id: 10,
		name: 'Директор дивизиона',
		value: 10,
	}
};
