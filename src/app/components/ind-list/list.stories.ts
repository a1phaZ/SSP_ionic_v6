import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TIndicator} from '../../models/indicator.model';
import {IonicModule} from '@ionic/angular';
import {action} from '@storybook/addon-actions';
import {IndListComponent} from './ind-list.component';
import {IndListItemModule} from '../ind-list-item/ind-list-item.module';

export default {
	component: IndListComponent,
	title: 'Indicators / List ',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot(), IndListItemModule],
			// declarations: [CustomIconButtonComponent]
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
