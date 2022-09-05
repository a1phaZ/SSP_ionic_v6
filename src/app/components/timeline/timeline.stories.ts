import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TimelineComponent} from './timeline.component';
import {CommonModule} from '@angular/common';
import {TimelineItemComponent} from '../timeline-item/timeline-item.component';

export default {
	component: TimelineComponent,
	title: 'TimeLine',
	decorators: [
		moduleMetadata({
			imports: [CommonModule],
			declarations: [TimelineItemComponent]
		})
	],
} as Meta;

const template: Story = (args) => ({
	props: {...args},
	template: `<div style="margin: 1em"><app-timeline [list]="list"></app-timeline></div>`
});

export const timeLine = template.bind({});
timeLine.args = {
	list: [
		{
			yearFrom: 2019,
			yearTo: 2021,
			monthFrom: 'Август',
			monthTo: 'Февраль',
			title: 'Сочи',
			subtitle: 'Директор дивизиона Сочи',
			status: 'end'
		},
		{
			yearFrom: 2021,
			yearTo: '',
			monthFrom: 'Март',
			monthTo: 'Настоящее время',
			title: 'Родина',
			subtitle: 'Директор дивизиона Родина',
			status: 'current'
		}
	]
};
