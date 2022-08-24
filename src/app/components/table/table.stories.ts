import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from './table.component';
import {CommonModule} from '@angular/common';
import {ServiceModule} from '../../services/service.module';
import {PipesModule} from '../../pipes/pipes.module';

export default {
	component: TableComponent,
	title: 'Indicators / Info / Details / Table',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, ServiceModule, PipesModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {
		...args
	}
});

export const defaultTable = template.bind({});
defaultTable.args = {
	ratingList: [
		{
			orgId: 67,
			orgName: 'Сочи',
			fakt: {
				value: 697,
				formatted: '697'
			},
			plan: {
				value: 1576,
				formatted: '1&nbsp;576'
			},
			pct: 44,
			state: 'bad',
			runrate: 60,
			id_parent_group: null
		},
		{
			orgId: 68,
			orgName: 'Новороссийск',
			fakt: {
				value: 424,
				formatted: '424'
			},
			plan: {
				value: 487,
				formatted: '487'
			},
			pct: 87,
			state: 'norm',
			runrate: 117,
			id_parent_group: null
		},
		{
			orgId: 69,
			orgName: 'Ставрополь',
			fakt: {
				value: 1725,
				formatted: '1&nbsp;725'
			},
			plan: {
				value: 2091,
				formatted: '2&nbsp;091'
			},
			pct: 82,
			state: 'norm',
			runrate: 111,
			id_parent_group: null
		},
		{
			orgId: 70,
			orgName: 'Ростов',
			fakt: {
				value: 1799,
				formatted: '1&nbsp;799'
			},
			plan: {
				value: 2375,
				formatted: '2&nbsp;375'
			},
			pct: 76,
			state: 'crit',
			runrate: 102,
			id_parent_group: null
		},
		{
			orgId: 103,
			orgName: 'Москва',
			fakt: {
				value: 1158,
				formatted: '1&nbsp;158'
			},
			plan: {
				value: 1344,
				formatted: '1&nbsp;344'
			},
			pct: 86,
			state: 'norm',
			runrate: 116,
			id_parent_group: null
		},
		{
			orgId: 71,
			orgName: 'КМВ',
			fakt: {
				value: 1820,
				formatted: '1&nbsp;820'
			},
			plan: {
				value: 1826,
				formatted: '1&nbsp;826'
			},
			pct: 100,
			state: 'good',
			runrate: 134,
			id_parent_group: null
		},
		{
			orgId: 132,
			orgName: 'Коммтранс',
			fakt: {
				value: 99,
				formatted: '99'
			},
			plan: {
				value: 0,
				formatted: '0'
			},
			pct: 100,
			state: 'good',
			runrate: 100,
			id_parent_group: null
		},
		{
			orgId: 166,
			orgName: 'Волгоград',
			fakt: {
				value: 250,
				formatted: '250'
			},
			plan: {
				value: 326,
				formatted: '326'
			},
			pct: 77,
			state: 'crit',
			runrate: 103,
			id_parent_group: null
		},
		{
			orgId: 173,
			orgName: 'Курск',
			fakt: {
				value: 122,
				formatted: '122'
			},
			plan: {
				value: 367,
				formatted: '367'
			},
			pct: 33,
			state: 'bad',
			runrate: 45,
			id_parent_group: null
		},
		{
			orgId: 72,
			orgName: 'Краснодар Юг',
			fakt: {
				value: 3030,
				formatted: '3&nbsp;030'
			},
			plan: {
				value: 4092,
				formatted: '4&nbsp;092'
			},
			pct: 74,
			state: 'crit',
			runrate: 100,
			id_parent_group: null
		},
		{
			orgId: 183,
			orgName: 'Вне дивизиона',
			fakt: {
				value: 0,
				formatted: '0'
			},
			plan: {
				value: 17,
				formatted: '17'
			},
			pct: 0,
			state: 'bad',
			runrate: 0,
			id_parent_group: null
		},
		{
			orgId: 73,
			orgName: 'Краснодар Север',
			fakt: {
				value: 1605,
				formatted: '1&nbsp;605'
			},
			plan: {
				value: 1635,
				formatted: '1&nbsp;635'
			},
			pct: 98,
			state: 'good',
			runrate: 132,
			id_parent_group: null
		},
		{
			orgId: 201,
			orgName: 'Родина',
			fakt: {
				value: 719,
				formatted: '719'
			},
			plan: {
				value: 1306,
				formatted: '1&nbsp;306'
			},
			pct: 55,
			state: 'bad',
			runrate: 74,
			id_parent_group: null
		},
		{
			orgId: 243,
			orgName: 'Санкт-Петербург',
			fakt: {
				value: 998,
				formatted: '998'
			},
			plan: {
				value: 1481,
				formatted: '1&nbsp;481'
			},
			pct: 67,
			state: 'crit',
			runrate: 91,
			id_parent_group: null
		},
		{
			orgName: 'Итого',
			fakt: {
				value: 14446,
				formatted: '14&nbsp;446'
			},
			plan: {
				value: 18923,
				formatted: '18&nbsp;923'
			},
			pct: 76,
			state: '',
			total: true
		}
	]
};
