import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {HeaderComponent} from './header.component';
import {IonicModule} from '@ionic/angular';
import {CustomIconButtonModule} from '../../custom-icon-button/custom-icon.button.module';
import {Icons} from '../../../models/icons.model';

export default {
	component: HeaderComponent,
	title: 'App / Header',
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot(), CustomIconButtonModule]
		})
	]
} as Meta;

const template: Story = (args: HeaderComponent) => ({
	props: {
		...args
	}
});

export const header = template.bind({});
header.args = {
	title: 'Default Title',
	buttons: {
		left: [Icons.arrowLeft],
		right: [Icons.filterCrisis, Icons.menu]
	}
};
