import {IndListItemComponent} from './ind-list-item.component';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TIndicator} from '../../models/indicator.model';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';
import {IndListItemModule} from './ind-list-item.module';

export default {
	component: IndListItemComponent,
	title: 'Indicators / Items / Standard Item',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot(), CustomIconButtonModule, IndListItemModule],
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
	item: indicator
};

export const statusSuccess = template.bind({});
statusSuccess.args = {
	item: {...indicator, plan: {...indicator.plan, completeStatus: 'success'}}
};

export const statusEnough = template.bind({});
statusEnough.args = {
	item: {...indicator, plan: {...indicator.plan, completeStatus: 'enough'}}
};

export const statusDanger = template.bind({});
statusDanger.args = {
	item: {...indicator, plan: {...indicator.plan, completeStatus: 'danger'}}
};

export const testIndicator = template.bind({});
testIndicator.args = {
	item: {...indicator, test: true}
};

export const indicatorWithChilds = template.bind({});
indicatorWithChilds.args = {
	item: {...indicator, childs: [{...indicator}]}
};
