import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {AccordionItemTypeDataComponent} from './accordion-item-type-data.component';
import {StorybookConst} from '../../../../shared/storybook.const';
import {AccordionModule} from '../accordion.module';
import {TAccordionItemTypeData} from '../../../../models/accordion.model';

export default {
	component: AccordionItemTypeDataComponent,
	title: StorybookConst.app + 'Аккордион',
	decorators: [
		moduleMetadata({
			imports: [AccordionModule]
		})
	]
} as Meta;

const template: Story = (args) => ({
	props: {...args}
});

const item: TAccordionItemTypeData = {
	name: 'Объект капитального строительства',
	type: 'data',
	data: [
		{
			field_name: 'Адрес объекта',
			field_value: 'Республика Адыгея, р-н Тахтамукайский, аул Новая Адыгея, ул. Тургеневское шоссе, 12В',
			field_type: 'text'
		},
		{
			field_name: 'Кадастровый номер',
			field_value: '01:05:2900013:5045',
			field_type: 'text'
		},
		{
			field_name: 'Общая площадь (кв. м)',
			field_value: '3234,2',
			field_type: 'text'
		},
		{
			field_name: 'Этажность',
			field_value: '1',
			field_type: 'text'
		},
		{
			field_name: 'Наименование объекта ',
			field_value: 'Торгово-сервисный центр по продаже и техническому обслуживанию автомобилей (НИССАН)',
			field_type: 'text'
		},
		{
			field_name: 'Юридический статус',
			field_value: 'собственность',
			field_type: 'text'
		},
		{
			field_name: 'Правоустанавливающие документы',
			field_value: 'Разрешение на ввод в эксплуатацию № RU0050530420060001-004 от 16.02.2015г.',
			field_type: 'text'
		},
		{
			field_name: 'Правоудостоверяющие документы',
			field_value: 'АР 003559 от 15.09.2015',
			field_type: 'text'
		},
		{
			field_name: 'Правообладатель',
			field_value: 'Собственник ООО "ГРУППА КОМПАНИЙ "СБСВ-КЛЮЧАВТО"',
			field_type: 'text'
		},
		{
			field_name: 'Дата ввода в эсплуатацию\r\n',
			field_value: 'Здание (Нежилое здание, "Торгово-сервисный центр по продаже и техническому ' +
				'обслуживанию автомобилей" 1 этап строительства)',
			field_type: 'text'
		},
		{
			field_name: 'Органичения / обремененения\r\n',
			field_value: '№ 01-01/004-01/004/201/2015-7804/1  от 15.09.2015  (Собственность) / № ' +
				'01:05:2900013:5045-01/034/2020-10  от 06.07.2020  (Ипотека)',
			field_type: 'text'
		}
	]
};

export const accordionTypeData = template.bind({});
accordionTypeData.args = {
	item
};

export const accordionTypeDataWithoutName = template.bind({});
accordionTypeDataWithoutName.args = {
	item: {
		name: '',
		type: 'data',
		data: [
			{
				field_name: 'Вид владения',
				field_value: false,
				field_date: '17.01.2021',
				field_type: 'text'
			},
			{
				field_name: 'Степень готовности',
				field_value: false,
				field_date: '17.01.2021',
				field_type: 'text'
			},
			{
				field_name: 'Стоимость строительства ДЦ',
				field_value: false,
				field_date: '17.01.2021',
				field_type: 'text'
			}
		]
	}
};
