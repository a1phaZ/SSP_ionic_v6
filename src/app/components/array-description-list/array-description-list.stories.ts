import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ArrayDescriptionListComponent} from './array-description-list.component';
import {StorybookConst} from '../../shared/storybook.const';
import {CommonModule} from '@angular/common';
import {ArrayDescriptionListItemComponent} from '../array-description-list-item/array-description-list-item.component';

export default {
	component: ArrayDescriptionListComponent,
	title: StorybookConst.indicators + StorybookConst.lists,
	decorators: [
		moduleMetadata({
			imports: [CommonModule],
			declarations: [ArrayDescriptionListItemComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const arrayDescriptionList = template.bind({});
arrayDescriptionList.args = {
	list: [
		{
			idPost: 10,
			id: 10,
			userName: 'Багдасаров А.А.',
			values: [
				'Директор дивизиона Родина'
			],
			value: 1,
			units: 'категория'
		},{
			idPost: 10,
			id: 11,
			userName: 'Бачурин Ю.А.',
			values: [
				'Директор дивизиона Тойота КМВ',
				'Директор дивизиона КМВ'
			],
			value: 1,
			units: 'категория'
		},{
			idPost: 10,
			id: 12,
			userName: 'Гриднев А.П.',
			values: [
				'Директор дивизиона Новороссийск'
			],
			value: 3,
			units: 'категория'
		},{
			idPost: 10,
			id: 13,
			userName: 'Загорулько А.С.',
			values: [
				'Директор дивизиона Ставрополь'
			],
			value: 2,
			units: 'категория'
		},{
			idPost: 10,
			id: 14,
			userName: 'Ногин А.В.',
			values: [
				'Директор дивизиона Мерседес Премиум',
				'Директор дивизиона Шкода Краснодар',
				'Директор дивизиона Фольксваген ОСТ',
				'Директор дивизиона Киа Краснодар Юг',
				'Директор дивизиона Краснодар Юг'
			],
			value: 1,
			units: 'категория'
		}
	]
};
