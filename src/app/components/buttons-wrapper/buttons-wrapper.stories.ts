import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ButtonsWrapperComponent} from './buttons-wrapper.component';
import {CommonModule} from '@angular/common';
import {
	CustomIconButtonWithTextComponent
} from '../custom-icon-button-with-text/custom-icon-button-with-text.component';
import {Button} from '../../models/button.model';
import {Icons} from '../../models/icons.model';

export default {
	component: ButtonsWrapperComponent,
	title: 'App / Buttons / Wrapper',
	decorators: [
		moduleMetadata({
			imports: [CommonModule],
			declarations: [CustomIconButtonWithTextComponent]
		})
	]
} as Meta;

const template: Story = (args: { buttons: Button[] }) => ({
	props: {
		...args,
	}
});

export const wrapper = template.bind({});
wrapper.args = {
	buttons: [
		{
			id: 3,
			name: Icons.month,
			text: 'Месяц',
			isSelected: true,
		},
		{
			id: 4,
			name: Icons.quaterYear,
			text: 'Квартал',
			isSelected: false,
		},
		{
			id: 5,
			name: Icons.halfYear,
			text: 'Полугодие',
			isSelected: false,
		},
		{
			id: 6,
			name: Icons.year,
			text: 'Год',
			isSelected: false,
		}
	]
};
