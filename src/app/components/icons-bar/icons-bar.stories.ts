import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IconsBarComponent} from './icons-bar.component';
import {StorybookConst} from '../../shared/storybook.const';
import {IconsBarModule} from './icons-bar.module';
import {Icons} from '../../models/icons.model';

export default {
	component: IconsBarComponent,
	title: StorybookConst.app + ' Bars',
	decorators: [
		moduleMetadata({
			imports: [IconsBarModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const iconsBar = template.bind({});
iconsBar.args = {
	selectedId: 1,
	items: [
		{
			id: 1,
			icon: `custom-${Icons.possessionsInfo}`
		},
		{
			id: 2,
			icon: `custom-${Icons.possessionsInvestments}`
		},
		{
			id: 3,
			icon: `custom-${Icons.possessionsDocuments}`
		},

		{
			id: 4,
			icon: `custom-${Icons.possessionsNoise}`
		},
	]
};
