import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AccordionItemComponent} from './accordion-item.component';
import {AccordionModule} from '../accordion.module';

export default {
	component: AccordionItemComponent,
	title: 'Аккордион',
	decorators: [
		moduleMetadata({
			imports: [AccordionModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const accordionItem = template.bind({});
accordionItem.args = {
	item: {
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
	}
};
