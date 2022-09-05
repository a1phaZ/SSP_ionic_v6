import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {SimpleListComponent} from './simple-list.component';
import {StorybookConst} from '../../shared/storybook.const';
import {CommonModule} from '@angular/common';
import {SimpleListItemComponent} from '../simple-list-item/simple-list-item.component';

export default {
	component: SimpleListComponent,
	title: StorybookConst.indicators + StorybookConst.lists,
	decorators: [
		moduleMetadata({
			imports: [CommonModule],
			declarations: [SimpleListItemComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const simpleList = template.bind({});
simpleList.args = {
	list: [
		{
			id: 10,
			name: 'Директор дивизиона',
			value: 10,
		},
		{
			id: 11,
			name: 'Директор ДЦ',
			value: 18,
		},
		{
			id: 12,
			name: 'Директор по продажам',
			value: 8,
		},
		{
			id: 13,
			name: 'Директор по сервису',
			value: 7,
		},
		{
			id: 14,
			name: 'Руководитель ОП',
			value: 38,
		},
		{
			id: 15,
			name: 'Руководитель ОС',
			value: 34,
		}
	]
};
