import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DonutComponent} from './donut.component';
import {StorybookConst} from '../../../shared/storybook.const';
import {CommonModule} from '@angular/common';

export default {
	component: DonutComponent,
	title: StorybookConst.charts + 'Donut',
	decorators: [
		moduleMetadata({
			imports: [CommonModule]
		})
	]
} as Meta;

const item = {
	id: 0,
	type: 'donut',
	title: 'NPS',
	innerText: '8.3',
	fontColor: 'warning',
	items: [
		{name: 'test 1', count: 20, color: 'rgb(66, 181, 32)'},
		{name: 'test 1', count: 20, color: 'rgb(255, 98, 48)'},
		{name: 'test 1', count: 20, color: 'rgb(255, 45, 45)'},
	],
};

const template: Story = (args) => ({
	props: {...args}
});

export const donut = template.bind({});
donut.args = {
	items: item.items,
	centerText: item.innerText,
};
