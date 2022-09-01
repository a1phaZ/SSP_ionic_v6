import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {IndSegmentedListComponent} from './ind-segmented-list.component';
import {CommonModule} from '@angular/common';
import {IndSegmentedListItemComponent} from '../ind-segmented-list-item/ind-segmented-list-item.component';

export default {
	component: IndSegmentedListComponent,
	title: 'Indicators / List',
	decorators: [
		moduleMetadata({
			imports: [CommonModule],
			declarations: [IndSegmentedListItemComponent]
		})
	]
} as Meta;

const template: Story =  (args) => ({
	props: {...args}
});

export const segmentedList = template.bind({});
segmentedList.args = {
	list: [
		{
			id: 20,
			parentId: 0,
			title: 'На должность Директор дивизиона',
			values: [
				58.6,
				5
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 1,
			parentId: 0,
			title: 'На должность Директор ДЦ',
			values: [
				52.2,
				16
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 26,
			parentId: 0,
			title: 'На должность Директор по продажам',
			values: [
				54.3,
				13
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 27,
			parentId: 0,
			title: 'На должность Директор по сервису',
			values: [
				35.1,
				7
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 52,
			parentId: 0,
			title: 'На должность Заместитель руководителя административно-хозяйственной службы',
			values: [
				21,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 49,
			parentId: 0,
			title: 'На должность Заместитель руководителя охраны труда',
			values: [
				55.5,
				2
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 57,
			parentId: 0,
			title: 'На должность Заместитель руководителя эксплуатации и строительства',
			values: [
				17,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 40,
			parentId: 0,
			title: 'На должность Менеджер ОЗЧ',
			values: [
				13.5,
				2
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 28,
			parentId: 0,
			title: 'На должность Продавец-консультант',
			values: [
				13.5,
				2
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 58,
			parentId: 0,
			title: 'На должность Руководитель аналитического отдела',
			values: [
				57,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 56,
			parentId: 0,
			title: 'На должность Руководитель инвестиционно-аналитического отдела',
			values: [
				27,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 3,
			parentId: 0,
			title: 'На должность Руководитель МКУ',
			values: [
				0,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 4,
			parentId: 0,
			title: 'На должность Руководитель ОЗЧ',
			values: [
				95,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 10,
			parentId: 0,
			title: 'На должность Руководитель ОП',
			values: [
				39.4,
				13
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 15,
			parentId: 0,
			title: 'На должность Руководитель ОПФУ',
			values: [
				44.2,
				6
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 8,
			parentId: 0,
			title: 'На должность Руководитель ОС',
			values: [
				40,
				15
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 44,
			parentId: 0,
			title: 'На должность Руководитель отдела закупок',
			values: [
				71.5,
				2
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 47,
			parentId: 0,
			title: 'На должность Руководитель отдела клиентского сервиса',
			values: [
				39.3,
				3
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 54,
			parentId: 0,
			title: 'На должность Руководитель отдела мотивации и квалификации',
			values: [
				35,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 32,
			parentId: 0,
			title: 'На должность Руководитель отдела операционного маркетинга',
			values: [
				75.3,
				3
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 50,
			parentId: 0,
			title: 'На должность Руководитель отдела охраны труда',
			values: [
				5,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 53,
			parentId: 0,
			title: 'На должность Руководитель отдела по технической поддержке, системному администрированию и коммуникациям',
			values: [
				80,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 55,
			parentId: 0,
			title: 'На должность Руководитель проектного офиса',
			values: [
				7,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 35,
			parentId: 0,
			title: 'На должность Руководитель службы ОЗЧ',
			values: [
				65,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 5,
			parentId: 0,
			title: 'На должность Руководитель службы по работе с клиентами',
			values: [
				47,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 46,
			parentId: 0,
			title: 'На должность Руководитель службы ПФУ',
			values: [
				47,
				3
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 45,
			parentId: 0,
			title: 'На должность Руководитель финансово-экономического отдела',
			values: [
				27,
				2
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 43,
			parentId: 0,
			title: 'На должность Сервисный консультант',
			values: [
				75,
				1
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 30,
			parentId: 0,
			title: 'На должность Старший продавец-консультант',
			values: [
				34.4,
				12
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 31,
			parentId: 0,
			title: 'На должность Старший сервисный консультант',
			values: [
				29.8,
				8
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		},
		{
			id: 16,
			parentId: 0,
			title: 'На должность Старший специалист ОФУ',
			values: [
				22.9,
				8
			],
			labels: [
				'ср. балл PIF',
				'чел'
			]
		}
	]
};
