import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AccordionItemFolderComponent} from './accordion-item-folder.component';
import {StorybookConst} from '../../../../shared/storybook.const';
import {AccordionModule} from '../accordion.module';
import {TAccordionItemFolder} from '../../../../models/accordion.model';

export default {
	component: AccordionItemFolderComponent,
	title: StorybookConst.app + 'Аккордион',
	decorators: [
		moduleMetadata({
			imports: [AccordionModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

const item: TAccordionItemFolder = {
	name: 'Юридические лица',
	type: 'folder',
	data: [
		{
			name: 'ООО "СБСВ-КЛЮЧАВТО АМЕГА"',
			type: 'data',
			data: [
				{
					field_name: 'ИНН',
					field_value: '2305028244',
					field_type: 'text'
				},
				{
					field_name: 'КПП',
					field_value: '230501001',
					field_type: 'text'
				}
			]
		}
	]
};

export const accordionFolder = template.bind({});
accordionFolder.args = {
	item
};
