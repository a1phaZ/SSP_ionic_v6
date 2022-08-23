import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ItemTextComponent} from './item-text.component';
import {TIndicatorDetailsBlockValue} from '../../../../../models/indicator.model';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../../../../../pipes/pipes.module';

export default {
	component: ItemTextComponent,
	title: 'Indicators / Info / Details / Block / Items Text',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, PipesModule],
		}),
	]
} as Meta;

const template: Story = (args: ItemTextComponent) => ({
	props: {...args}
});

const item: TIndicatorDetailsBlockValue = {
	type: 'text',
	name: 'curPeriodFakt',
	title: 'Факт с <span>1-22 июл 2022</span>',
	value: '12 341',
	suffix: 'шт.',
	// blur: true
};

export const blockValue = template.bind({});
blockValue.args = {
	item
};

export const blockValueWithBlur = template.bind({});
blockValueWithBlur.args = {
	item: {...item, blur: true}
};
