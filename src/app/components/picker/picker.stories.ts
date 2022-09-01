import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {PickerComponent} from './picker.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';
import {
	CustomIconButtonWithTextComponent
} from '../custom-icon-button-with-text/custom-icon-button-with-text.component';
import {ButtonsWrapperComponent} from '../buttons-wrapper/buttons-wrapper.component';
import {Icons} from '../../models/icons.model';
import {StorybookConst} from '../../shared/storybook.const';

export default {
	component: PickerComponent,
	title: StorybookConst.app + ' Picker',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot(), CustomIconButtonModule],
			declarations: [ButtonsWrapperComponent, CustomIconButtonWithTextComponent]
		})
	],
	parameters: {
		controls: {
			exclude: ['arrayOfMonthValues', 'arrayOfYears', 'title']
		}
	}
} as Meta;

const template: Story = (args) => ({
	props: {
		...args
	}
});

export const picker = template.bind({});
picker.args = {
	minYear: 2017,
	maxYear: 2022,
	periodId: 4,
	periodValue: 2,
	periodYear: new Date().getFullYear(),
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

