import {Meta, Story} from '@storybook/angular';
import {TimelineItemComponent} from './timeline-item.component';

export default {
	component: TimelineItemComponent,
	title: 'TimeLine',
} as Meta;

const template: Story = (args) => ({
	props: {...args},
});

export const endItem = template.bind({});
endItem.args = {
	item: {
		yearFrom: 2019,
		yearTo: 2021,
		monthFrom: 'Август',
		monthTo: 'Февраль',
		title: 'Сочи',
		subtitle: 'Директор дивизиона Сочи',
		status: 'end'
	}
};

export const currentItem = template.bind({});
currentItem.args = {
	item: {
		yearFrom: 2021,
		yearTo: '',
		monthFrom: 'Март',
		monthTo: 'Настоящее время',
		title: 'Родина',
		subtitle: 'Директор дивизиона Родина',
		status: 'current'
	}
};
