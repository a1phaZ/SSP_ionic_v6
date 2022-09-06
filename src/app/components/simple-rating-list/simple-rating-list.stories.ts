import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {SimpleRatingListComponent} from './simple-rating-list.component';
import {StorybookConst} from '../../shared/storybook.const';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SimpleRatingListItemComponent} from '../simple-rating-list-item/simple-rating-list-item.component';

export default {
	component: SimpleRatingListComponent,
	title: StorybookConst.indicators + StorybookConst.lists,
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot(), CommonModule],
			declarations: [SimpleRatingListItemComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const simpleRatingList = template.bind({});
simpleRatingList.args = {
	list: [
		{
			id: 10,
			name: 'Багдасаров А.А.',
			value: 30,
			rating: 1,
			trend: 1,
		},
		{
			id: 10,
			name: 'Багдасаров А.А.',
			value: 30,
			rating: 1,
			trend: -1,
		},
		{
			id: 10,
			name: 'Багдасаров А.А.',
			value: 30,
			rating: 1,
			trend: 0,
		}
	]
};
