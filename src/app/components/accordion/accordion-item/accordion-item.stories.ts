import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AccordionItemComponent} from './accordion-item.component';
import {AccordionModule} from '../accordion.module';

export default {
	component: AccordionItemComponent,
	title: 'Аккардион',
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
accordionItem.args = {};
