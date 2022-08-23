import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ItemBarComponent} from './item-bar.component';
import {TIndicatorDetailsBlockValue} from '../../../../../models/indicator.model';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../../../../../pipes/pipes.module';

export default {
	component: ItemBarComponent,
	title: 'Indicators / Info / Details / Block / Items Bar',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, PipesModule],
		}),
	]
} as Meta;

const item: TIndicatorDetailsBlockValue = {
	type: 'bar',
	value: 101,
	min: 0,
	max: 100,
	state: 'excellent',
	suffix: '%'
};

const template: Story = (args) => ({
	props: {...args}
});

export const excellentBar = template.bind({});
excellentBar.args = {
	item
};

export const successBar = template.bind({});
successBar.args = {
	item: {...item, state: 'success', value: 75}
};

export const enoughBar = template.bind({});
enoughBar.args = {
	item: {...item, state: 'enough', value: 56}
};

export const dangerBar = template.bind({});
dangerBar.args = {
	item: {...item, state: 'danger', value: 32}
};

