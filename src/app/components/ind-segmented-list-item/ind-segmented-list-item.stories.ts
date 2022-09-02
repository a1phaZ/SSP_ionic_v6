import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IndSegmentedListItemComponent} from './ind-segmented-list-item.component';
import {CommonModule} from '@angular/common';

export default {
	component: IndSegmentedListItemComponent,
	title: 'Indicators / Items / Segmented',
	decorators: [
		moduleMetadata({
			imports: [CommonModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});
const item = {
	id: 53,
	parentId: 0,
	title: 'На должность Руководитель отдела по технической поддержке, системному администрированию и коммуникациям',
	values: [
		80,
		1
	],
	labels: [
		'ср. балл PIF',
		'чел'
	]
};

export const verticalSegments = template.bind({});
verticalSegments.args = {
	item,
	orientation: 'vertical',
};

export const horizontalSegments = template.bind({});
horizontalSegments.args = {
	item,
	orientation: 'horizontal',
};
