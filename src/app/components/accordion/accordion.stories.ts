import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AccordionComponent} from './accordion.component';
import {AccordionModule} from './accordion.module';
import {TAccordionItem} from '../../models/accordion.model';

export default {
	component: AccordionComponent,
	title: 'Аккордион',
	decorators: [
		moduleMetadata({
			imports: [AccordionModule]
		})
	],
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

const item: TAccordionItem = {
	id: 1,
	city: 'Адыгея',
	name: 'Адыгея',
	thumb: '/functions/s3Files.php?filename=ssp/posessions/gallery_5fdf6da2442d31608478114_thumb.jpg',
	objectName: 'Mercedes_Land Rover_Jaguar Конгрессная 6',
	square: '3234,2 кв.м.',
	year: 2015,
	objectType: 'Построен ГК',
	status: 'Действующий',
	logo: [
		'jlr',
		'mercedes'
	]
};

export const accordion = template.bind({});
accordion.args = {
	list: Array(20).fill(item),
};
