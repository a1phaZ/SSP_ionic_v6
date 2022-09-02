import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IndProgressListItemComponent} from './ind-progress-list-item.component';
import {TIndicatorProgress} from '../../models/indicator-progress.model';
import {ChartsModule} from '../charts/charts.module';

export default {
	component: IndProgressListItemComponent,
	title: 'Indicators / Items / Progress Item',
	decorators: [
		moduleMetadata({
			imports: [ChartsModule]
		})
	]
} as Meta;

const template: Story =  (args) => ({
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
	progressValue: 75
};

export const progressGood = template.bind({});
progressGood.args = {
	item
};

export const progressBad = template.bind({});
progressBad.args = {
	item: {...item, progressStatus: 'bad', progressValue: 25}
};

export const progressNorm = template.bind({});
progressNorm.args = {
	item: {...item, progressStatus: 'norm', progressValue: 50}
};

export const progressCrit = template.bind({});
progressCrit.args = {
	item: {...item, progressStatus: 'crit', progressValue: 5}
};
