import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IndProgressListComponent} from './ind-progress-list.component';
import {StorybookConst} from '../../shared/storybook.const';
import {IndProgressListItemComponent} from '../ind-progress-list-item/ind-progress-list-item.component';
import {CircleChartComponent} from '../charts/circle/circle-chart.component';

export default {
	component: IndProgressListComponent,
	title: StorybookConst.indicators + StorybookConst.lists,
	decorators: [
		moduleMetadata({
			declarations: [IndProgressListItemComponent, CircleChartComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const progressList = template.bind({});
progressList.args = {
	list: [
		{
			id: 106,
			name: 'Буршит П. М.',
			position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
			place: 'Краснодар',
			value: '50',
			unit: 'PIF',
			progressStatus: 'good',
			progressValue: 75
		},
		{
			id: 106,
			name: 'Буршит П. М.',
			position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
			place: 'Краснодар',
			value: '50',
			unit: 'PIF',
			progressStatus: 'good',
			progressValue: 75
		},
		{
			id: 106,
			name: 'Буршит П. М.',
			position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
			place: 'Краснодар',
			value: '50',
			unit: 'PIF',
			progressStatus: 'good',
			progressValue: 75
		},
		{
			id: 106,
			name: 'Буршит П. М.',
			position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
			place: 'Краснодар',
			value: '50',
			unit: 'PIF',
			progressStatus: 'good',
			progressValue: 75
		},
		{
			id: 106,
			name: 'Буршит П. М.',
			position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
			place: 'Краснодар',
			value: '50',
			unit: 'PIF',
			progressStatus: 'good',
			progressValue: 75
		}
	]
};
