import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {CustomIconButtonComponent} from '../custom-icon-button/custom-icon-button.component';
import {IonicModule} from '@ionic/angular';
import {action} from '@storybook/addon-actions';
import {OrgsListComponent} from './orgs-list.component';
import {OrgListItemComponent} from '../org-list-item/org-list-item.component';
import {LogoModule} from '../app/logo/logo.module';

export default {
	component: OrgsListComponent,
	title: 'Organizations / List',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, IonicModule.forRoot(), LogoModule],
			declarations: [OrgListItemComponent, CustomIconButtonComponent]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args, onItemToggle: action('onItemToggle')},
});

export const listWithOutChild = template.bind({});
listWithOutChild.args = {
	list: [
		{
			id: 100,
			logo: '',
			title: 'Автохолдинг',
			isOpen: false,
			isActive: true,
		},
		{
			id: 100,
			logo: 'audi',
			title: 'Audi',
			isOpen: false,
		},
		{
			id: 101,
			logo: 'bentley',
			title: 'bentley',
			isOpen: false,
		},
		{
			id: 102,
			logo: 'bmw',
			title: 'bmw',
			isOpen: false,
		},
		{
			id: 103,
			logo: 'changan',
			title: 'changan',
			isOpen: false,
		}
	]
};

export const listWithChild = template.bind({});
listWithChild.args = {
	list: [
		{
			id: 100,
			logo: '',
			title: 'Автохолдинг',
			isOpen: false,
			isActive: true,
		},
		{
			id: 101,
			logo: 'audi',
			title: 'Audi',
			isOpen: false,
			childs: [
				{
					id: 100,
					logo: '',
					title: 'Автохолдинг',
					isOpen: false,
					isActive: true,
				},
				{
					id: 100,
					logo: 'audi',
					title: 'Audi',
					isOpen: false,
				},
				{
					id: 101,
					logo: 'bentley',
					title: 'bentley',
					isOpen: false,
				},
				{
					id: 102,
					logo: 'bmw',
					title: 'bmw',
					isOpen: false,
				},
				{
					id: 103,
					logo: 'changan',
					title: 'changan',
					isOpen: false,
				}
			]
		},
		{
			id: 102,
			logo: 'bentley',
			title: 'bentley',
			isOpen: false,
		},
		{
			id: 103,
			logo: 'bmw',
			title: 'bmw',
			isOpen: false,
		},
		{
			id: 104,
			logo: 'changan',
			title: 'changan',
			isOpen: false,
		}
	]
};
