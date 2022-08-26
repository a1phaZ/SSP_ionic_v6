import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {ListComponent} from './list.component';
import {CommonModule} from '@angular/common';
import {IndListItemComponent} from '../ind-list-item/ind-list-item.component';
import {TIndicator} from '../../models/indicator.model';
import {CustomIconButtonComponent} from '../custom-icon-button/custom-icon-button.component';
import {IonicModule} from '@ionic/angular';
import {action} from '@storybook/addon-actions';

export default {
	component: ListComponent,
	title: 'Indicators / List / List',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot()],
			declarations: [IndListItemComponent, CustomIconButtonComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args, onItemToggle: action('onItemToggle')},
});

const list: TIndicator[] = [
	{
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
		childs: [{
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
			childs: [
				{
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
				}
			],
			isOpen: false,
		}],
		isOpen: false,
	},
	{
		id: 101,
		title: 'Первичный трафик ОПА',
		plan: {
			sum: 18923,
			viewSum: '18923',
			complete: 69,
			completeStatus: 'success'
		},
		fact: {
			sum: 13008,
			viewSum: '13008'
		},
		units: 'шт.',
		mode: 'standard',
		childs: [{
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
			childs: [
				{
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
				}
			],
			isOpen: false,
		}],
		isOpen: false,
	},
	{
		id: 102,
		title: 'Первичный трафик ОПА',
		plan: {
			sum: 18923,
			viewSum: '18923',
			complete: 69,
			completeStatus: 'enough'
		},
		fact: {
			sum: 13008,
			viewSum: '13008'
		},
		units: 'шт.',
		mode: 'standard',
		childs: [],
		isOpen: false,
	},
	{
		id: 103,
		title: 'Первичный трафик ОПА',
		plan: {
			sum: 18923,
			viewSum: '18923',
			complete: 69,
			completeStatus: 'danger'
		},
		fact: {
			sum: 13008,
			viewSum: '13008'
		},
		units: 'шт.',
		mode: 'standard',
		childs: [],
		isOpen: false,
	},
	{
		id: 104,
		title: 'Первичный трафик ОПА',
		plan: {
			sum: 18923,
			viewSum: '18923',
			complete: 69,
			completeStatus: 'danger'
		},
		fact: {
			sum: 13008,
			viewSum: '13008'
		},
		units: 'шт.',
		mode: 'standard',
		test: true,
		childs: [],
		isOpen: false,
	}
];

export const indicatorsList = template.bind({});
indicatorsList.args = {
	list
};
