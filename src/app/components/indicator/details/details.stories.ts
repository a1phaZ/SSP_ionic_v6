import {Meta, Story} from '@storybook/angular';
import {DetailsComponent} from './details.component';
import {TIndicatorDetails} from '../../../models/indicator.model';

export default {
	component: DetailsComponent,
	title: 'Indicators / Info / Details'
} as Meta;

const template: Story = (args: DetailsComponent) => ({
	props: {...args}
});

const details: TIndicatorDetails = {
	blocks: [
		{
			periodId: 1,
			periodName: 'День',
			values: [
				{
					type: 'text',
					name: 'curDayFakt',
					title: 'Факт за <span>22 авг 2022</span>',
					value: '659',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curDayPlan',
					title: 'План на <span>22 авг 2022</span>',
					value: '610',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curDayPct',
					title: '% вып. за <span>22 авг 2022</span>',
					value: 108,
					suffix: '%'
				}
			]
		},
		{
			periodId: 3,
			periodName: 'Месяц',
			values: [
				{
					type: 'text',
					name: 'curPeriodFakt',
					title: 'Факт с <span>1-22 авг 2022</span>',
					value: '13 593',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curPeriodPlanAll',
					title: 'План на <span>1-22 авг 2022</span>',
					value: '13 429',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curPeriodPlanAll',
					title: 'План на <span>авг 2022</span>',
					value: '18 923',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curPeriodPct',
					title: '% вып. за <span>авг 2022</span>',
					value: 72,
					suffix: '%'
				},
				{
					type: 'text',
					name: 'curPeriodFakt',
					title: 'Факт с <span>1-22 июл 2022</span>',
					value: '12 341',
					suffix: 'шт.',
					blur: true
				},
				{
					type: 'text',
					name: 'curPeriodFakt',
					title: 'Факт с <span>1-22 авг 2021</span>',
					value: '36 952',
					suffix: 'шт.',
					blur: true
				},
				{
					type: 'bar',
					value: 101,
					min: 0,
					max: 100,
					state: 'excellent',
					suffix: '%'
				}
			]
		},
		{
			periodId: 6,
			periodName: 'Год',
			values: [
				{
					type: 'text',
					name: 'curYearFakt',
					title: 'Факт за <span>1 янв-22 авг 2022</span>',
					value: '209 898',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curYearPlan',
					title: 'План на <span>1 янв-22 авг 2022</span>',
					value: '207 324',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'curYearPlanAll',
					title: 'План на <span>2022 год</span>',
					value: '212 818',
					suffix: 'шт.'
				},
				{
					type: 'text',
					name: 'lastYearFakt',
					title: 'Факт за <span>1 янв-22 авг 2021</span>',
					value: '310 168',
					suffix: 'шт.'
				}
			]
		}
	],
	comments: 'Формула: Количество вх. звонков (первичных) в ОПА + Количество интернет-обращений в ОПА.<br />\nИсточник сверки факта: 1С Торговля - Отчет по звонкам<br />\nУчитываются звонки с причинами:<br />\nКЦ00058 Авто для ЮРИД.ЛИЦ;<br />\nКЦ00079 - клиент просил передать номер/отказ от соединения;<br />\nКЦ00012 - консультация ОПА;<br />\nКЦ00162 (КЦ00153) - Контакт-центр;<br />\nКЦ00022 - СБРОС вызова;<br />\nКЦ00165 - Автоспот;<br />\n000000001 - Интернет-магазин;<br />\nКЦ00020 - СООБЩЕНИЕ С САЙТА.<br />\nАктуальность методики 09.03.2021',
	formula: '<div class="formula_op"></div><div class="formula_ind">Количество вх. звонков (первичных) в ОПА</div><div class="formula_op">+</div><div class="formula_ind">Количество интернет-обращений в ОПА</div><div class="formula_op"></div>',
	formula2: '<div class="formula_op"></div><div class="formula_ind">13 004,00</div><div class="formula_op">+</div><div class="formula_ind">831,00</div><div class="formula_op"></div>',
	indInfo: {
		id: 1979,
		id_period: 1,
		depends_count: 3,
		title: 'Первичный трафик в ОПА',
		is_marka_analytics: null
	}
};

export const indicatorDetails = template.bind({});
indicatorDetails.args = {
	indicator: {...details}
};
