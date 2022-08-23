import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {BlockComponent} from './block.component';
import {TIndicatorDetailsBlock} from '../../../../models/indicator.model';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../../../../pipes/pipes.module';
import {ItemTextComponent} from './item-text/item-text.component';
import {ItemBarComponent} from './item-bar/item-bar.component';

export default {
	component: BlockComponent,
	title: 'Indicators / Info / Details / Block',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, PipesModule],
			declarations: [ItemTextComponent, ItemBarComponent]
		}),
	],
} as Meta;
const template: Story = (args: BlockComponent) => ({
	props: {...args}
});

const blocks: TIndicatorDetailsBlock[] = [
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
];

export const blockPeriodDay = template.bind({});
blockPeriodDay.args = {
	block: {...blocks[0]}
};

export const blockPeriodMonth = template.bind({});
blockPeriodMonth.args = {
	block: {...blocks[1]}
};

export const blockPeriodYear = template.bind({});
blockPeriodYear.args = {
	block: {...blocks[2]}
};
