import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {OrgListItemComponent} from './org-list-item.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';
import {ServiceModule} from '../../services/service.module';

export default {
	component: OrgListItemComponent,
	title: 'Organizations / List / Item',
	decorators: [
		moduleMetadata({
			imports: [IonicModule.forRoot(), CommonModule, CustomIconButtonModule, ServiceModule],
			// declarations: [LogoService]
		})
	]
} as Meta;

const template: Story = (args: OrgListItemComponent) => ({
	props: {
		...args
	}
});
const item = {
	id: 100,
	logo: 'audi',
	title: 'Audi',
	// childs?: TOrgSelectItem[];
	isOpen: false,
};

export const nonActiveItem = template.bind({});
nonActiveItem.args = {
	item,
	active: false,
};

export const activeItem = template.bind({});
activeItem.args = {
	item,
	active: true
};
