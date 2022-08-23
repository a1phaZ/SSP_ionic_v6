import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {dashboardList} from '../../shared/dashboard.const';

import {DashboardListComponent} from './dashboard-list.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../../pipes/pipes.module';
import {action} from '@storybook/addon-actions';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';

export default {
	component: DashboardListComponent,
	title: 'Dashboard / List Component',
	decorators: [
		moduleMetadata({
			//👇 Imports both components to allow component composition with Storybook
			imports: [CommonModule, PipesModule],
			declarations: [DashboardItemComponent]
		}),
		//👇 Wraps our stories with a decorator
		componentWrapperDecorator(story => `<div style="margin: 1em">${story}</div>`),
	],
	excludeStories: /.*Data$/,
} as Meta;

export const actionData = {
	selectItem: action('selectItem'),
};

const Template: Story = (args) => ({
	props: {...args}
});

export const ParentList = Template.bind({});
ParentList.args = {
	list: dashboardList.filter(item => item.isChild === false),
};

export const childList = Template.bind({});
childList.args = {
	list: dashboardList.filter(item => item.isChild === true && item.parentId === 8),
};
