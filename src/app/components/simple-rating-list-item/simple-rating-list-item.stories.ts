import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {SimpleRatingListItemComponent} from './simple-rating-list-item.component';
import {StorybookConst} from '../../shared/storybook.const';
import {IonicModule} from '@ionic/angular';

export default {
	component: SimpleRatingListItemComponent,
	title: StorybookConst.indicators + StorybookConst.elements,
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot()],
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const simpleRatingTrendUpItem = template.bind({});
simpleRatingTrendUpItem.args = {
	item: {
		id: 10,
		name: 'Багдасаров А.А.',
		value: 30,
		rating: 1,
		trend: 1,
	}
};

export const simpleRatingTrendDownItem = template.bind({});
simpleRatingTrendDownItem.args = {
	item: {
		id: 10,
		name: 'Багдасаров А.А.',
		value: 30,
		rating: 1,
		trend: -1,
	}
};

export const simpleRatingWithOutTrendItem = template.bind({});
simpleRatingWithOutTrendItem.args = {
	item: {
		id: 10,
		name: 'Багдасаров А.А.',
		value: 30,
		rating: 1,
		trend: 0,
	}
};
