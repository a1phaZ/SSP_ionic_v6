import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IconComponent} from './icon.component';
import {StorybookConst} from '../../../shared/storybook.const';
import {IonicModule} from '@ionic/angular';
import {IconModule} from './icon.module';
import {Icons} from '../../../models/icons.model';

export default {
	component: IconComponent,
	title: StorybookConst.app + 'Иконки',
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot(), IconModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

export const arrowDownFill = template.bind({});
arrowDownFill.args = {
	name: `custom-${Icons.arrowDownFill}`
};
