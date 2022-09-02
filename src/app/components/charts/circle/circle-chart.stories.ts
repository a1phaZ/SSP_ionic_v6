import {Meta, Story} from '@storybook/angular';
import {CircleChartComponent} from './circle-chart.component';
import {StorybookConst} from '../../../shared/storybook.const';
import {TIndicatorProgress} from '../../../models/indicator-progress.model';

export default {
	component: CircleChartComponent,
	title: StorybookConst.charts + 'Circle',
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

const item: TIndicatorProgress = {
	id: 106,
	name: 'Буршит П. М.',
	position: 'Бренд-директор ООО ГК СБСВ-КЛЮЧАВТО',
	place: 'Краснодар',
	value: '50',
	unit: 'PIF',
	progressStatus: 'good',
	progressValue: 0
};

export const circle = template.bind({});
circle.args = {
	item
};
