import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {CustomIconButtonComponent} from './custom-icon-button.component';
import {IonicModule} from '@ionic/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {CustomIconButtonModule} from './custom-icon.button.module';

export default {
	component: CustomIconButtonComponent,
	title: 'App / Icon Button',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot(), CustomIconButtonModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args},
	clickBtn: action('onClickBtn')
});

export const arrowDownButton = template.bind({});
arrowDownButton.args = {
	id: 100,
	name: 'arrow-down'
};
