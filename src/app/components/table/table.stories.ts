import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TableComponent} from './table.component';
import {CommonModule} from '@angular/common';
import {ServiceModule} from '../../services/service.module';
import {PipesModule} from '../../pipes/pipes.module';
import {TableRowComponent} from './table-row/table-row.component';

export default {
	component: TableComponent,
	title: 'Indicators / Info / Details / Table',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, ServiceModule, PipesModule],
			declarations: [TableRowComponent]
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

export const tableWithChilds = template.bind({});
tableWithChilds.args = {
	ratingList: [
		{
			orgId: 22,
			orgName: 'Бентли',
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
			orgId: 418,
			orgName: 'Крр Север Mass',
			fakt: {
				value: 849,
				formatted: '849'
			},
			plan: {
				value: 733,
				formatted: '733'
			},
			pct: 116,
			state: 'good',
			runrate: 150,
			id_parent_group: null,
			childs: [
				{
					orgId: 9,
					orgName: 'Фольксваген Краснодар',
					fakt: {
						value: 169,
						formatted: '169'
					},
					plan: {
						value: 200,
						formatted: '200'
					},
					pct: 85,
					state: 'norm',
					runrate: 109,
					id_parent_group: 418
				},
				{
					orgId: 16,
					orgName: 'Киа Краснодар',
					fakt: {
						value: 680,
						formatted: '680'
					},
					plan: {
						value: 533,
						formatted: '533'
					},
					pct: 128,
					state: 'good',
					runrate: 165,
					id_parent_group: 418
				}
			]
		},
		{
			orgId: 419,
			orgName: 'Крр Север Medium',
			fakt: {
				value: 314,
				formatted: '314'
			},
			plan: {
				value: 300,
				formatted: '300'
			},
			pct: 105,
			state: 'good',
			runrate: 135,
			id_parent_group: null,
			childs: [
				{
					orgId: 34,
					orgName: 'Тойота Жуковка',
					fakt: {
						value: 265,
						formatted: '265'
					},
					plan: {
						value: 267,
						formatted: '267'
					},
					pct: 99,
					state: 'good',
					runrate: 128,
					id_parent_group: 419
				},
				{
					orgId: 140,
					orgName: 'Лексус Краснодар Север',
					fakt: {
						value: 49,
						formatted: '49'
					},
					plan: {
						value: 33,
						formatted: '33'
					},
					pct: 148,
					state: 'good',
					runrate: 192,
					id_parent_group: 419
				}
			]
		},
		{
			orgId: 420,
			orgName: 'Крр Север Premium',
			fakt: {
				value: 203,
				formatted: '203'
			},
			plan: {
				value: 202,
				formatted: '202'
			},
			pct: 100,
			state: 'good',
			runrate: 130,
			id_parent_group: null,
			childs: [
				{
					orgId: 4,
					orgName: 'Мерседес Север',
					fakt: {
						value: 170,
						formatted: '170'
					},
					plan: {
						value: 176,
						formatted: '176'
					},
					pct: 97,
					state: 'good',
					runrate: 125,
					id_parent_group: 420
				},
				{
					orgId: 33,
					orgName: 'Ленд Ровер',
					fakt: {
						value: 33,
						formatted: '33'
					},
					plan: {
						value: 26,
						formatted: '26'
					},
					pct: 127,
					state: 'good',
					runrate: 164,
					id_parent_group: 420
				}
			]
		},
		{
			orgId: 421,
			orgName: 'Ставрополь Mass',
			fakt: {
				value: 1328,
				formatted: '1&nbsp;328'
			},
			plan: {
				value: 1741,
				formatted: '1&nbsp;741'
			},
			pct: 76,
			state: 'crit',
			runrate: 99,
			id_parent_group: null,
			childs: [
				{
					orgId: 37,
					orgName: 'Киа Ставрополь',
					fakt: {
						value: 407,
						formatted: '407'
					},
					plan: {
						value: 467,
						formatted: '467'
					},
					pct: 87,
					state: 'norm',
					runrate: 113,
					id_parent_group: 421
				},
				{
					orgId: 65,
					orgName: 'Ниссан/Хавейл/Чанган Ставрополь',
					fakt: {
						value: 447,
						formatted: '447'
					},
					plan: {
						value: 807,
						formatted: '807'
					},
					pct: 55,
					state: 'bad',
					runrate: 72,
					id_parent_group: 421
				},
				{
					orgId: 100,
					orgName: 'Хендэ Ставрополь',
					fakt: {
						value: 474,
						formatted: '474'
					},
					plan: {
						value: 467,
						formatted: '467'
					},
					pct: 101,
					state: 'good',
					runrate: 131,
					id_parent_group: 421
				}
			]
		},
		{
			orgId: 422,
			orgName: 'Ставрополь Premium',
			fakt: {
				value: 429,
				formatted: '429'
			},
			plan: {
				value: 350,
				formatted: '350'
			},
			pct: 123,
			state: 'good',
			runrate: 158,
			id_parent_group: null,
			childs: [
				{
					orgId: 26,
					orgName: 'Мерседес Ставрополь',
					fakt: {
						value: 70,
						formatted: '70'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 70,
					state: 'crit',
					runrate: 90,
					id_parent_group: 422
				},
				{
					orgId: 29,
					orgName: 'БМВ Ставрополь',
					fakt: {
						value: 236,
						formatted: '236'
					},
					plan: {
						value: 112,
						formatted: '112'
					},
					pct: 211,
					state: 'good',
					runrate: 272,
					id_parent_group: 422
				},
				{
					orgId: 32,
					orgName: 'Ауди Ставрополь',
					fakt: {
						value: 73,
						formatted: '73'
					},
					plan: {
						value: 62,
						formatted: '62'
					},
					pct: 118,
					state: 'good',
					runrate: 152,
					id_parent_group: 422
				},
				{
					orgId: 177,
					orgName: 'Мазда Ставрополь',
					fakt: {
						value: 50,
						formatted: '50'
					},
					plan: {
						value: 76,
						formatted: '76'
					},
					pct: 66,
					state: 'crit',
					runrate: 85,
					id_parent_group: 422
				}
			]
		},
		{
			orgId: 423,
			orgName: 'Кмв Mass',
			fakt: {
				value: 772,
				formatted: '772'
			},
			plan: {
				value: 916,
				formatted: '916'
			},
			pct: 84,
			state: 'norm',
			runrate: 109,
			id_parent_group: null,
			childs: [
				{
					orgId: 31,
					orgName: 'Киа КМВ',
					fakt: {
						value: 483,
						formatted: '483'
					},
					plan: {
						value: 583,
						formatted: '583'
					},
					pct: 83,
					state: 'norm',
					runrate: 107,
					id_parent_group: 423
				},
				{
					orgId: 20,
					orgName: 'Хендэ КМВ',
					fakt: {
						value: 289,
						formatted: '289'
					},
					plan: {
						value: 333,
						formatted: '333'
					},
					pct: 87,
					state: 'norm',
					runrate: 112,
					id_parent_group: 423
				}
			]
		},
		{
			orgId: 424,
			orgName: 'Кмв Medium',
			fakt: {
				value: 744,
				formatted: '744'
			},
			plan: {
				value: 472,
				formatted: '472'
			},
			pct: 158,
			state: 'good',
			runrate: 204,
			id_parent_group: null,
			childs: [
				{
					orgId: 2,
					orgName: 'Тойота КМВ',
					fakt: {
						value: 422,
						formatted: '422'
					},
					plan: {
						value: 167,
						formatted: '167'
					},
					pct: 253,
					state: 'good',
					runrate: 326,
					id_parent_group: 424
				},
				{
					orgId: 66,
					orgName: 'Ниссан/Датсун КМВ',
					fakt: {
						value: 145,
						formatted: '145'
					},
					plan: {
						value: 167,
						formatted: '167'
					},
					pct: 87,
					state: 'norm',
					runrate: 112,
					id_parent_group: 424
				},
				{
					orgId: 139,
					orgName: 'Лексус КМВ',
					fakt: {
						value: 55,
						formatted: '55'
					},
					plan: {
						value: 38,
						formatted: '38'
					},
					pct: 145,
					state: 'good',
					runrate: 187,
					id_parent_group: 424
				},
				{
					orgId: 189,
					orgName: 'Мазда КМВ',
					fakt: {
						value: 122,
						formatted: '122'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 122,
					state: 'good',
					runrate: 158,
					id_parent_group: 424
				}
			]
		},
		{
			orgId: 425,
			orgName: 'Кмв Premium',
			fakt: {
				value: 257,
				formatted: '257'
			},
			plan: {
				value: 188,
				formatted: '188'
			},
			pct: 137,
			state: 'good',
			runrate: 177,
			id_parent_group: null,
			childs: [
				{
					orgId: 27,
					orgName: 'БМВ КМВ',
					fakt: {
						value: 158,
						formatted: '158'
					},
					plan: {
						value: 112,
						formatted: '112'
					},
					pct: 141,
					state: 'good',
					runrate: 182,
					id_parent_group: 425
				},
				{
					orgId: 28,
					orgName: 'Мерседес КМВ',
					fakt: {
						value: 99,
						formatted: '99'
					},
					plan: {
						value: 76,
						formatted: '76'
					},
					pct: 130,
					state: 'good',
					runrate: 168,
					id_parent_group: 425
				}
			]
		},
		{
			orgId: 427,
			orgName: 'Волгоград Multi',
			fakt: {
				value: 258,
				formatted: '258'
			},
			plan: {
				value: 326,
				formatted: '326'
			},
			pct: 79,
			state: 'crit',
			runrate: 102,
			id_parent_group: null,
			childs: [
				{
					orgId: 168,
					orgName: 'Мазда Волгоград',
					fakt: {
						value: 81,
						formatted: '81'
					},
					plan: {
						value: 150,
						formatted: '150'
					},
					pct: 54,
					state: 'bad',
					runrate: 70,
					id_parent_group: 427
				},
				{
					orgId: 165,
					orgName: 'Мерседес Волгоград',
					fakt: {
						value: 62,
						formatted: '62'
					},
					plan: {
						value: 76,
						formatted: '76'
					},
					pct: 82,
					state: 'norm',
					runrate: 105,
					id_parent_group: 427
				},
				{
					orgId: 197,
					orgName: 'БМВ Волгоград',
					fakt: {
						value: 115,
						formatted: '115'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 115,
					state: 'good',
					runrate: 149,
					id_parent_group: 427
				}
			]
		},
		{
			orgId: 428,
			orgName: 'Москва Люберцы Multi',
			fakt: {
				value: 1185,
				formatted: '1&nbsp;185'
			},
			plan: {
				value: 1344,
				formatted: '1&nbsp;344'
			},
			pct: 88,
			state: 'norm',
			runrate: 114,
			id_parent_group: null,
			childs: [
				{
					orgId: 59,
					orgName: 'HMV Волоколамка',
					fakt: {
						value: 0,
						formatted: '0'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 428
				},
				{
					orgId: 104,
					orgName: 'Хендэ Люберцы',
					fakt: {
						value: 413,
						formatted: '413'
					},
					plan: {
						value: 700,
						formatted: '700'
					},
					pct: 59,
					state: 'bad',
					runrate: 76,
					id_parent_group: 428
				},
				{
					orgId: 105,
					orgName: 'Ниссан Люберцы',
					fakt: {
						value: 772,
						formatted: '772'
					},
					plan: {
						value: 644,
						formatted: '644'
					},
					pct: 120,
					state: 'good',
					runrate: 155,
					id_parent_group: 428
				}
			]
		},
		{
			orgId: 429,
			orgName: 'Сочи Exeed',
			fakt: {
				value: 54,
				formatted: '54'
			},
			plan: {
				value: 350,
				formatted: '350'
			},
			pct: 15,
			state: 'bad',
			runrate: 20,
			id_parent_group: null,
			childs: [
				{
					orgId: 452,
					orgName: 'Эксид Сочи',
					fakt: {
						value: 54,
						formatted: '54'
					},
					plan: {
						value: 350,
						formatted: '350'
					},
					pct: 15,
					state: 'bad',
					runrate: 20,
					id_parent_group: 429
				}
			]
		},
		{
			orgId: 430,
			orgName: 'Сочи Premium',
			fakt: {
				value: 202,
				formatted: '202'
			},
			plan: {
				value: 271,
				formatted: '271'
			},
			pct: 75,
			state: 'crit',
			runrate: 96,
			id_parent_group: null,
			childs: [
				{
					orgId: 12,
					orgName: 'Тойота Сочи',
					fakt: {
						value: 136,
						formatted: '136'
					},
					plan: {
						value: 183,
						formatted: '183'
					},
					pct: 74,
					state: 'crit',
					runrate: 96,
					id_parent_group: 430
				},
				{
					orgId: 13,
					orgName: 'Ауди Сочи',
					fakt: {
						value: 33,
						formatted: '33'
					},
					plan: {
						value: 50,
						formatted: '50'
					},
					pct: 66,
					state: 'crit',
					runrate: 85,
					id_parent_group: 430
				},
				{
					orgId: 113,
					orgName: 'Лексус Сочи',
					fakt: {
						value: 33,
						formatted: '33'
					},
					plan: {
						value: 38,
						formatted: '38'
					},
					pct: 87,
					state: 'norm',
					runrate: 112,
					id_parent_group: 430
				}
			]
		},
		{
			orgId: 431,
			orgName: 'Сочи Mass',
			fakt: {
				value: 458,
				formatted: '458'
			},
			plan: {
				value: 955,
				formatted: '955'
			},
			pct: 48,
			state: 'bad',
			runrate: 62,
			id_parent_group: null,
			childs: [
				{
					orgId: 14,
					orgName: 'Фольксваген/Шкода Сочи',
					fakt: {
						value: 105,
						formatted: '105'
					},
					plan: {
						value: 234,
						formatted: '234'
					},
					pct: 45,
					state: 'bad',
					runrate: 58,
					id_parent_group: 431
				},
				{
					orgId: 15,
					orgName: 'Хендэ/Киа Сочи',
					fakt: {
						value: 353,
						formatted: '353'
					},
					plan: {
						value: 721,
						formatted: '721'
					},
					pct: 49,
					state: 'bad',
					runrate: 63,
					id_parent_group: 431
				}
			]
		},
		{
			orgId: 432,
			orgName: 'Омск Левый Берег Multi',
			fakt: {
				value: 287,
				formatted: '287'
			},
			plan: {
				value: 275,
				formatted: '275'
			},
			pct: 104,
			state: 'good',
			runrate: 135,
			id_parent_group: null,
			childs: [
				{
					orgId: 407,
					orgName: 'Джили Омск',
					fakt: {
						value: 116,
						formatted: '116'
					},
					plan: {
						value: 125,
						formatted: '125'
					},
					pct: 93,
					state: 'good',
					runrate: 120,
					id_parent_group: 432
				},
				{
					orgId: 212,
					orgName: 'Фольксваген Омск',
					fakt: {
						value: 64,
						formatted: '64'
					},
					plan: {
						value: 50,
						formatted: '50'
					},
					pct: 128,
					state: 'good',
					runrate: 165,
					id_parent_group: 432
				},
				{
					orgId: 202,
					orgName: 'Рено Кондратюка',
					fakt: {
						value: 48,
						formatted: '48'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 432
				},
				{
					orgId: 211,
					orgName: 'Ниссан Омск',
					fakt: {
						value: 59,
						formatted: '59'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 59,
					state: 'bad',
					runrate: 76,
					id_parent_group: 432
				}
			]
		},
		{
			orgId: 433,
			orgName: 'Омск Левый Берег Korea',
			fakt: {
				value: 228,
				formatted: '228'
			},
			plan: {
				value: 434,
				formatted: '434'
			},
			pct: 53,
			state: 'bad',
			runrate: 68,
			id_parent_group: null,
			childs: [
				{
					orgId: 214,
					orgName: 'Киа Омск',
					fakt: {
						value: 127,
						formatted: '127'
					},
					plan: {
						value: 267,
						formatted: '267'
					},
					pct: 48,
					state: 'bad',
					runrate: 61,
					id_parent_group: 433
				},
				{
					orgId: 215,
					orgName: 'Хендэ Омск',
					fakt: {
						value: 101,
						formatted: '101'
					},
					plan: {
						value: 167,
						formatted: '167'
					},
					pct: 60,
					state: 'bad',
					runrate: 78,
					id_parent_group: 433
				}
			]
		},
		{
			orgId: 434,
			orgName: 'Омск Рабочая',
			fakt: {
				value: 219,
				formatted: '219'
			},
			plan: {
				value: 497,
				formatted: '497'
			},
			pct: 44,
			state: 'bad',
			runrate: 57,
			id_parent_group: null,
			childs: [
				{
					orgId: 200,
					orgName: 'Мицубиши Омск',
					fakt: {
						value: 15,
						formatted: '15'
					},
					plan: {
						value: 17,
						formatted: '17'
					},
					pct: 88,
					state: 'norm',
					runrate: 114,
					id_parent_group: 434
				},
				{
					orgId: 208,
					orgName: 'Чанган/Черри Омск',
					fakt: {
						value: 129,
						formatted: '129'
					},
					plan: {
						value: 320,
						formatted: '320'
					},
					pct: 40,
					state: 'bad',
					runrate: 52,
					id_parent_group: 434
				},
				{
					orgId: 207,
					orgName: 'Мерседес Омск',
					fakt: {
						value: 24,
						formatted: '24'
					},
					plan: {
						value: 33,
						formatted: '33'
					},
					pct: 73,
					state: 'crit',
					runrate: 94,
					id_parent_group: 434
				},
				{
					orgId: 203,
					orgName: 'Шкода Омск',
					fakt: {
						value: 20,
						formatted: '20'
					},
					plan: {
						value: 17,
						formatted: '17'
					},
					pct: 118,
					state: 'good',
					runrate: 152,
					id_parent_group: 434
				},
				{
					orgId: 241,
					orgName: 'Рено Рабочая',
					fakt: {
						value: 31,
						formatted: '31'
					},
					plan: {
						value: 110,
						formatted: '110'
					},
					pct: 28,
					state: 'bad',
					runrate: 36,
					id_parent_group: 434
				}
			]
		},
		{
			orgId: 435,
			orgName: 'Омск Exeed',
			fakt: {
				value: 16,
				formatted: '16'
			},
			plan: {
				value: 100,
				formatted: '100'
			},
			pct: 16,
			state: 'bad',
			runrate: 21,
			id_parent_group: null,
			childs: [
				{
					orgId: 451,
					orgName: 'Эксид Омск',
					fakt: {
						value: 16,
						formatted: '16'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 16,
					state: 'bad',
					runrate: 21,
					id_parent_group: 435
				}
			]
		},
		{
			orgId: 436,
			orgName: 'Крр Юг Адыгея Multi',
			fakt: {
				value: 517,
				formatted: '517'
			},
			plan: {
				value: 750,
				formatted: '750'
			},
			pct: 69,
			state: 'crit',
			runrate: 89,
			id_parent_group: null,
			childs: [
				{
					orgId: 30,
					orgName: 'Ниссан/Джили Адыгея',
					fakt: {
						value: 517,
						formatted: '517'
					},
					plan: {
						value: 750,
						formatted: '750'
					},
					pct: 69,
					state: 'crit',
					runrate: 89,
					id_parent_group: 436
				}
			]
		},
		{
			orgId: 437,
			orgName: 'Крр Юг Аэропорт Mass',
			fakt: {
				value: 969,
				formatted: '969'
			},
			plan: {
				value: 1350,
				formatted: '1&nbsp;350'
			},
			pct: 72,
			state: 'crit',
			runrate: 93,
			id_parent_group: null,
			childs: [
				{
					orgId: 8,
					orgName: 'Хендэ Краснодар',
					fakt: {
						value: 498,
						formatted: '498'
					},
					plan: {
						value: 717,
						formatted: '717'
					},
					pct: 69,
					state: 'crit',
					runrate: 90,
					id_parent_group: 437
				},
				{
					orgId: 19,
					orgName: 'Рено Краснодар',
					fakt: {
						value: 377,
						formatted: '377'
					},
					plan: {
						value: 500,
						formatted: '500'
					},
					pct: 75,
					state: 'crit',
					runrate: 97,
					id_parent_group: 437
				},
				{
					orgId: 21,
					orgName: 'Мицубиши/Форд Краснодар',
					fakt: {
						value: 94,
						formatted: '94'
					},
					plan: {
						value: 133,
						formatted: '133'
					},
					pct: 71,
					state: 'crit',
					runrate: 91,
					id_parent_group: 437
				}
			]
		},
		{
			orgId: 438,
			orgName: 'Крр Юг Аэропорт Medium',
			fakt: {
				value: 719,
				formatted: '719'
			},
			plan: {
				value: 588,
				formatted: '588'
			},
			pct: 122,
			state: 'good',
			runrate: 158,
			id_parent_group: null,
			childs: [
				{
					orgId: 10,
					orgName: 'Тойота Аэропорт',
					fakt: {
						value: 293,
						formatted: '293'
					},
					plan: {
						value: 250,
						formatted: '250'
					},
					pct: 117,
					state: 'good',
					runrate: 151,
					id_parent_group: 438
				},
				{
					orgId: 11,
					orgName: 'Лексус Краснодар',
					fakt: {
						value: 59,
						formatted: '59'
					},
					plan: {
						value: 38,
						formatted: '38'
					},
					pct: 155,
					state: 'good',
					runrate: 201,
					id_parent_group: 438
				},
				{
					orgId: 62,
					orgName: 'Ниссан/Чанган Аэропорт',
					fakt: {
						value: 367,
						formatted: '367'
					},
					plan: {
						value: 300,
						formatted: '300'
					},
					pct: 122,
					state: 'good',
					runrate: 158,
					id_parent_group: 438
				}
			]
		},
		{
			orgId: 439,
			orgName: 'Крр Юг Аэропорт Premium',
			fakt: {
				value: 133,
				formatted: '133'
			},
			plan: {
				value: 188,
				formatted: '188'
			},
			pct: 71,
			state: 'crit',
			runrate: 91,
			id_parent_group: null,
			childs: [
				{
					orgId: 35,
					orgName: 'Мерседес Премиум',
					fakt: {
						value: 133,
						formatted: '133'
					},
					plan: {
						value: 188,
						formatted: '188'
					},
					pct: 71,
					state: 'crit',
					runrate: 91,
					id_parent_group: 439
				}
			]
		},
		{
			orgId: 440,
			orgName: 'Новороссийск Multi',
			fakt: {
				value: 439,
				formatted: '439'
			},
			plan: {
				value: 487,
				formatted: '487'
			},
			pct: 90,
			state: 'norm',
			runrate: 116,
			id_parent_group: null,
			childs: [
				{
					orgId: 17,
					orgName: 'Тойота Новороссийск',
					fakt: {
						value: 184,
						formatted: '184'
					},
					plan: {
						value: 133,
						formatted: '133'
					},
					pct: 138,
					state: 'good',
					runrate: 179,
					id_parent_group: 440
				},
				{
					orgId: 64,
					orgName: 'Ниссан/Датсун/Рено Новороссийск',
					fakt: {
						value: 226,
						formatted: '226'
					},
					plan: {
						value: 316,
						formatted: '316'
					},
					pct: 72,
					state: 'crit',
					runrate: 92,
					id_parent_group: 440
				},
				{
					orgId: 102,
					orgName: 'Лексус Новороссийск',
					fakt: {
						value: 29,
						formatted: '29'
					},
					plan: {
						value: 38,
						formatted: '38'
					},
					pct: 76,
					state: 'crit',
					runrate: 99,
					id_parent_group: 440
				}
			]
		},
		{
			orgId: 441,
			orgName: 'Ростов Аксай Multi',
			fakt: {
				value: 849,
				formatted: '849'
			},
			plan: {
				value: 879,
				formatted: '879'
			},
			pct: 97,
			state: 'good',
			runrate: 125,
			id_parent_group: null,
			childs: [
				{
					orgId: 23,
					orgName: 'Тойота Аксай',
					fakt: {
						value: 219,
						formatted: '219'
					},
					plan: {
						value: 200,
						formatted: '200'
					},
					pct: 110,
					state: 'good',
					runrate: 141,
					id_parent_group: 441
				},
				{
					orgId: 98,
					orgName: 'Киа Ростов',
					fakt: {
						value: 502,
						formatted: '502'
					},
					plan: {
						value: 550,
						formatted: '550'
					},
					pct: 91,
					state: 'good',
					runrate: 118,
					id_parent_group: 441
				},
				{
					orgId: 129,
					orgName: 'Лексус Аксай',
					fakt: {
						value: 72,
						formatted: '72'
					},
					plan: {
						value: 62,
						formatted: '62'
					},
					pct: 116,
					state: 'good',
					runrate: 150,
					id_parent_group: 441
				},
				{
					orgId: 364,
					orgName: 'Ниссан Аксай',
					fakt: {
						value: 56,
						formatted: '56'
					},
					plan: {
						value: 67,
						formatted: '67'
					},
					pct: 84,
					state: 'norm',
					runrate: 108,
					id_parent_group: 441
				}
			]
		},
		{
			orgId: 442,
			orgName: 'Ростов Запад Premium',
			fakt: {
				value: 161,
				formatted: '161'
			},
			plan: {
				value: 276,
				formatted: '276'
			},
			pct: 58,
			state: 'bad',
			runrate: 75,
			id_parent_group: null,
			childs: [
				{
					orgId: 36,
					orgName: 'Мерседес Ростов',
					fakt: {
						value: 12,
						formatted: '12'
					},
					plan: {
						value: 50,
						formatted: '50'
					},
					pct: 24,
					state: 'bad',
					runrate: 31,
					id_parent_group: 442
				},
				{
					orgId: 55,
					orgName: 'Тойота Ростов',
					fakt: {
						value: 0,
						formatted: '0'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 442
				},
				{
					orgId: 56,
					orgName: 'Мерседес Азов',
					fakt: {
						value: 149,
						formatted: '149'
					},
					plan: {
						value: 226,
						formatted: '226'
					},
					pct: 66,
					state: 'crit',
					runrate: 85,
					id_parent_group: 442
				}
			]
		},
		{
			orgId: 443,
			orgName: 'Ростов Вавилова Mass',
			fakt: {
				value: 838,
				formatted: '838'
			},
			plan: {
				value: 1220,
				formatted: '1&nbsp;220'
			},
			pct: 69,
			state: 'crit',
			runrate: 89,
			id_parent_group: null,
			childs: [
				{
					orgId: 63,
					orgName: 'Ниссан/Чери Ростов',
					fakt: {
						value: 367,
						formatted: '367'
					},
					plan: {
						value: 637,
						formatted: '637'
					},
					pct: 58,
					state: 'bad',
					runrate: 74,
					id_parent_group: 443
				},
				{
					orgId: 99,
					orgName: 'Хендэ Ростов',
					fakt: {
						value: 471,
						formatted: '471'
					},
					plan: {
						value: 583,
						formatted: '583'
					},
					pct: 81,
					state: 'norm',
					runrate: 104,
					id_parent_group: 443
				}
			]
		},
		{
			orgId: 444,
			orgName: 'Курск Multi',
			fakt: {
				value: 127,
				formatted: '127'
			},
			plan: {
				value: 367,
				formatted: '367'
			},
			pct: 35,
			state: 'bad',
			runrate: 45,
			id_parent_group: null,
			childs: [
				{
					orgId: 172,
					orgName: 'Хендэ Курск',
					fakt: {
						value: 127,
						formatted: '127'
					},
					plan: {
						value: 367,
						formatted: '367'
					},
					pct: 35,
					state: 'bad',
					runrate: 45,
					id_parent_group: 444
				}
			]
		},
		{
			orgId: 445,
			orgName: 'Спб Пулково Multi',
			fakt: {
				value: 524,
				formatted: '524'
			},
			plan: {
				value: 738,
				formatted: '738'
			},
			pct: 71,
			state: 'crit',
			runrate: 92,
			id_parent_group: null,
			childs: [
				{
					orgId: 244,
					orgName: 'Тойота Пулково',
					fakt: {
						value: 295,
						formatted: '295'
					},
					plan: {
						value: 100,
						formatted: '100'
					},
					pct: 295,
					state: 'good',
					runrate: 381,
					id_parent_group: 445
				},
				{
					orgId: 414,
					orgName: 'Эксид Пулково',
					fakt: {
						value: 134,
						formatted: '134'
					},
					plan: {
						value: 638,
						formatted: '638'
					},
					pct: 21,
					state: 'bad',
					runrate: 27,
					id_parent_group: 445
				},
				{
					orgId: 245,
					orgName: 'Лексус Пулково',
					fakt: {
						value: 95,
						formatted: '95'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 445
				}
			]
		},
		{
			orgId: 446,
			orgName: 'Спб Пискаревский Multi',
			fakt: {
				value: 321,
				formatted: '321'
			},
			plan: {
				value: 367,
				formatted: '367'
			},
			pct: 87,
			state: 'norm',
			runrate: 113,
			id_parent_group: null,
			childs: [
				{
					orgId: 242,
					orgName: 'Тойота Пискаревский',
					fakt: {
						value: 321,
						formatted: '321'
					},
					plan: {
						value: 367,
						formatted: '367'
					},
					pct: 87,
					state: 'norm',
					runrate: 113,
					id_parent_group: 446
				}
			]
		},
		{
			orgId: 447,
			orgName: 'Спб Витебский Multi',
			fakt: {
				value: 186,
				formatted: '186'
			},
			plan: {
				value: 376,
				formatted: '376'
			},
			pct: 49,
			state: 'bad',
			runrate: 64,
			id_parent_group: null,
			childs: [
				{
					orgId: 246,
					orgName: 'Ауди Витебский',
					fakt: {
						value: 186,
						formatted: '186'
					},
					plan: {
						value: 376,
						formatted: '376'
					},
					pct: 49,
					state: 'bad',
					runrate: 64,
					id_parent_group: 447
				}
			]
		},
		{
			orgId: 448,
			orgName: 'Коммтранс Multi',
			fakt: {
				value: 101,
				formatted: '101'
			},
			plan: {
				value: 0,
				formatted: '0'
			},
			pct: 100,
			state: 'good',
			runrate: 100,
			id_parent_group: null,
			childs: [
				{
					orgId: 24,
					orgName: 'Мерседес КМВ ТРАК',
					fakt: {
						value: 42,
						formatted: '42'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 448
				},
				{
					orgId: 25,
					orgName: 'Мерседес ГК',
					fakt: {
						value: 59,
						formatted: '59'
					},
					plan: {
						value: 0,
						formatted: '0'
					},
					pct: 100,
					state: 'good',
					runrate: 100,
					id_parent_group: 448
				}
			]
		},
		{
			orgId: 449,
			orgName: 'Крр Юг Крылатая Mass',
			fakt: {
				value: 745,
				formatted: '745'
			},
			plan: {
				value: 1216,
				formatted: '1&nbsp;216'
			},
			pct: 61,
			state: 'crit',
			runrate: 79,
			id_parent_group: null,
			childs: [
				{
					orgId: 18,
					orgName: 'Шкода Краснодар',
					fakt: {
						value: 180,
						formatted: '180'
					},
					plan: {
						value: 383,
						formatted: '383'
					},
					pct: 47,
					state: 'bad',
					runrate: 61,
					id_parent_group: 449
				},
				{
					orgId: 60,
					orgName: 'Фольксваген ОСТ',
					fakt: {
						value: 126,
						formatted: '126'
					},
					plan: {
						value: 333,
						formatted: '333'
					},
					pct: 38,
					state: 'bad',
					runrate: 49,
					id_parent_group: 449
				},
				{
					orgId: 167,
					orgName: 'Киа Краснодар Юг',
					fakt: {
						value: 439,
						formatted: '439'
					},
					plan: {
						value: 500,
						formatted: '500'
					},
					pct: 88,
					state: 'norm',
					runrate: 113,
					id_parent_group: 449
				}
			]
		},
		{
			orgId: 453,
			orgName: 'Кмв Exeed',
			fakt: {
				value: 106,
				formatted: '106'
			},
			plan: {
				value: 250,
				formatted: '250'
			},
			pct: 42,
			state: 'bad',
			runrate: 55,
			id_parent_group: null,
			childs: [
				{
					orgId: 450,
					orgName: 'Эксид КМВ',
					fakt: {
						value: 106,
						formatted: '106'
					},
					plan: {
						value: 250,
						formatted: '250'
					},
					pct: 42,
					state: 'bad',
					runrate: 55,
					id_parent_group: 453
				}
			]
		},
		{
			orgId: 417,
			orgName: 'Крр Север Geely',
			fakt: {
				value: 275,
				formatted: '275'
			},
			plan: {
				value: 400,
				formatted: '400'
			},
			pct: 69,
			state: 'crit',
			runrate: 89,
			id_parent_group: null,
			childs: [
				{
					orgId: 367,
					orgName: 'Джили Краснодар Север',
					fakt: {
						value: 275,
						formatted: '275'
					},
					plan: {
						value: 400,
						formatted: '400'
					},
					pct: 69,
					state: 'crit',
					runrate: 89,
					id_parent_group: 417
				}
			]
		},
		{
			orgName: 'Итого',
			fakt: {
				value: 14813,
				formatted: '14&nbsp;813'
			},
			plan: {
				value: 18923,
				formatted: '18&nbsp;923'
			},
			pct: 78,
			state: '',
			total: true
		}
	]
};
