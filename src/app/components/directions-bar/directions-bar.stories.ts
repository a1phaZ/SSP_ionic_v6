import {Meta, moduleMetadata, Story} from '@storybook/angular';
import { DirectionsBarComponent } from './directions-bar.component';
import { CommonModule } from '@angular/common';
import {StorybookConst} from '../../shared/storybook.const';

export default {
	component: DirectionsBarComponent,
	title: StorybookConst.app + ' Bars',
	decorators: [
		moduleMetadata({
			imports: [CommonModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {
		...args
	}
});

export const directionsBar = template.bind({});
directionsBar.args = {
	selectedId: 4,
	items: [
		{
			id: 4,
			title: 'ОПА',
			buttonId: 9,
			period: null
		},
		{
			id: 7,
			title: 'СПУС',
			buttonId: 9,
			period: null
		},
		{
			id: 5,
			title: 'ПО',
			buttonId: 9,
			period: null
		},
		{
			id: 3,
			title: 'ОЗЧ',
			buttonId: 9,
			period: null
		},
		{
			id: 2,
			title: 'МКУ',
			buttonId: 9,
			period: null
		},
		{
			id: 1,
			title: 'Финансы',
			buttonId: 9,
			period: {
				periodYear: 2022,
				periodValue: 7
			}
		}
	]
};
