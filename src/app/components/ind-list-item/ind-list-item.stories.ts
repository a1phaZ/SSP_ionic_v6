import {IndListItemComponent} from './ind-list-item.component';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TIndicator} from '../../models/indicator.model';
import {IonicModule} from '@ionic/angular';
import {CustomIconButtonComponent} from '../custom-icon-button/custom-icon-button.component';
import {CommonModule} from '@angular/common';

export default {
	component: IndListItemComponent,
	title: 'Indicators / List / Standard Item',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot()],
			declarations: [CustomIconButtonComponent]
		}),
	],
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

const indicator: TIndicator = {
	id: 100,
	title: 'Первичный трафик ОПА',
	plan: {
		sum: 18923,
		viewSum: '18923',
		complete: 69,
		completeStatus: 'excellent'
	},
	fact: {
		sum: 13008,
		viewSum: '13008'
	},
	units: 'шт.',
	mode: 'standard',
	childs: [],
	isOpen: false,
};

export const statusExcellent = template.bind({});
statusExcellent.args = {
	indicator
};

export const statusSuccess = template.bind({});
statusSuccess.args = {
	indicator: {...indicator, plan: {...indicator.plan, completeStatus: 'success'}}
};

export const statusEnough = template.bind({});
statusEnough.args = {
	indicator: {...indicator, plan: {...indicator.plan, completeStatus: 'enough'}}
};

export const statusDanger = template.bind({});
statusDanger.args = {
	indicator: {...indicator, plan: {...indicator.plan, completeStatus: 'danger'}}
};

export const testIndicator = template.bind({});
testIndicator.args = {
	indicator: {...indicator, test: true}
};

export const indicatorWithChilds = template.bind({});
indicatorWithChilds.args = {
	indicator: {...indicator, childs: [{...indicator}]}
};
