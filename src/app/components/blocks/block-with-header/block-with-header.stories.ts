import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BlockWithHeaderComponent} from './block-with-header.component';
import {StorybookConst} from '../../../shared/storybook.const';
import {CommonModule} from '@angular/common';
import {ItemTextComponent} from '../../indicator/details/block/item-text/item-text.component';
import {PipesModule} from '../../../pipes/pipes.module';

export default {
	component: BlockWithHeaderComponent,
	title: StorybookConst.indicators + 'Блоки',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, PipesModule],
			declarations: [ItemTextComponent],
		}),
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const blockWithHeader = template.bind({});
blockWithHeader.args = {
	block: {
		periodId: 3,
		periodName: 'Месяц',
		values: [
			{
				name: 'План ФОТ месяц',
				value: '0р',
				lvl: '0'
			},
			{
				name: 'Факт ФОТ месяц',
				value: '0р',
				lvl: '0'
			},
			{
				name: 'Оклад',
				value: '0р',
				lvl: '0'
			},
			{
				name: 'Премия к начислению',
				value: '0р',
				lvl: '0'
			},
			{
				name: 'Ежемесячная',
				value: '0р',
				lvl: '1'
			},
			{
				name: 'Операционная прибыль',
				value: '0р',
				lvl: '2'
			},
			{
				name: 'Квалификация',
				value: '0р',
				lvl: '2'
			},
			{
				name: 'Ежеквартальная',
				value: '0р',
				lvl: '1'
			},
			{
				name: 'ЧДП',
				value: '0р',
				lvl: '2'
			},
			{
				name: 'Допначисления',
				value: '0р',
				lvl: '2'
			},
			{
				name: 'Бренд Директор',
				value: '0р',
				lvl: '2'
			}
		]
	}
};

