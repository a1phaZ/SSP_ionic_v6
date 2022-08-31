import {Story, Meta, moduleMetadata} from '@storybook/angular';
import {CustomIconButtonWithTextComponent} from './custom-icon-button-with-text.component';
import {IonicModule} from '@ionic/angular';

export default {
	component: CustomIconButtonWithTextComponent,
	title: 'App / Icon Button With Text',
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot()]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {
		...args
	}
});

export const monthButton = template.bind({});
monthButton.args = {
	id: 100,
	name: 'month',
	text: 'Месяц',
};
