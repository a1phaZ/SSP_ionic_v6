import {componentWrapperDecorator, Meta, moduleMetadata, Story} from '@storybook/angular';
import {dashboardList} from '../../shared/dashboard.const';

import {DashboardItemComponent} from './dashboard-item.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '../../pipes/pipes.module';
import {action} from '@storybook/addon-actions';

export default {
	component: DashboardItemComponent,
	title: 'Dashboard / Item Component',
	decorators: [
		moduleMetadata({
			//👇 Imports both components to allow component composition with Storybook
			imports: [CommonModule, PipesModule],
			// declarations: [DashboardItemComponent]
		}),
		//👇 Wraps our stories with a decorator
		// componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
	],
	excludeStories: /.*Data$/,
} as Meta;

export const actionData = {
	onSelectItem: action('onSelectItem'),
};

const template: Story = (args) => ({
	props: {...args},
	selectItem: actionData.onSelectItem,
	// template: `
	// 	<app-dashboard-item [item]="item" (selectItem)="selectItem($event)"></app-dashboard-item>
	// `
});

export const button = template.bind({});
button.args = {
	item: dashboardList[0],
};
