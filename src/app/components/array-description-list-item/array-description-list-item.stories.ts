import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ArrayDescriptionListItemComponent} from './array-description-list-item.component';
import {StorybookConst} from '../../shared/storybook.const';
import {CommonModule} from '@angular/common';

export default {
	component: ArrayDescriptionListItemComponent,
	title: StorybookConst.indicators + StorybookConst.elements,
	decorators: [
		moduleMetadata({
			imports: [CommonModule]
		})
	],
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const arrayDescriptionItem = template.bind({});
arrayDescriptionItem.args = {
	item: {
		idPost: 10,
		id: 10,
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
};
