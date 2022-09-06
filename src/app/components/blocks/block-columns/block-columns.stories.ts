import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BlockColumnsComponent} from './block-columns.component';
import {StorybookConst} from '../../../shared/storybook.const';
import {CommonModule} from '@angular/common';
import {ItemsModule} from '../../items/items.module';

export default {
	component: BlockColumnsComponent,
	title: StorybookConst.indicators + 'Блоки',
	decorators: [
		moduleMetadata(({
			imports: [CommonModule, ItemsModule],
		}))
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const blockColumn = template.bind({});

blockColumn.args = {
	block: {
		name: 'Категории и условия присвоения',
		info: [
			{
				name: 'Категория 1',
				value: 'ФОТ 700 000 руб. ',
				comment: 'Директор дивизиона (8 ДЦ и более)'
			},
			{
				name: 'Категория 2',
				value: 'ФОТ 600 000 руб. ',
				comment: 'Директор дивизиона (от 5-ти до 7-ми ДЦ)'
			},
			{
				name: 'Категория 3',
				value: 'ФОТ 550 000 руб. ',
				comment: 'Директор дивизиона (4 ДЦ)'
			}
		]
	}
};
