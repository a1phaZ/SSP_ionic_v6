import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@capacitor/app';
import {setDirectionsList} from '../../store/directions/directions.actions';

@Injectable({
	providedIn: 'root'
})
export class DirectionService {

	constructor(
		private store: Store<AppState>,
	) {
		// TODO Диспатчить лист как только его получаю
		this.store.dispatch(setDirectionsList({list: directionsList}));
	}

}

const directionsList = [
	{
		id: 4,
		title: 'ОПА',
		buttonId: 9,
		period: null
	},
	{
		id: 45,
		title: 'Продажи',
		buttonId: 28,
		period: null
	},
	{
		id: 47,
		title: 'Склад',
		buttonId: 28,
		period: null
	},
	{
		id: 7,
		title: 'СПУС',
		buttonId: 9,
		period: null
	},
	{
		id: 46,
		title: 'Финансы',
		buttonId: 28,
		period: {
			periodYear: 2022,
			periodValue: 8
		}
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
			periodValue: 8
		}
	},
	{
		id: 6,
		title: 'ТД',
		buttonId: 0,
		period: null
	},
	{
		id: 8,
		title: 'Холдинг',
		buttonId: 0,
		period: null
	},
	{
		id: 10,
		title: 'КС',
		buttonId: 0,
		period: null
	},
	{
		id: 11,
		title: 'Страхование',
		buttonId: 0,
		period: null
	},
	{
		id: 12,
		title: 'Кредитование и страхование',
		buttonId: 0,
		period: null
	},
	{
		id: 13,
		title: 'Персонал',
		buttonId: 0,
		period: null
	},
	{
		id: 14,
		title: 'Трейд',
		buttonId: 0,
		period: null
	},
	{
		id: 15,
		title: 'Новая логистика',
		buttonId: 0,
		period: null
	},
	{
		id: 9,
		title: 'Трейд Холдинг',
		buttonId: 0,
		period: null
	},
	{
		id: 16,
		title: 'ОПА',
		buttonId: 10,
		period: null
	},
	{
		id: 17,
		title: 'СПУС',
		buttonId: 10,
		period: null
	},
	{
		id: 18,
		title: 'ПО',
		buttonId: 10,
		period: null
	},
	{
		id: 19,
		title: 'ОЗЧ',
		buttonId: 10,
		period: null
	},
	{
		id: 20,
		title: 'Финансы',
		buttonId: 10,
		period: {
			periodYear: 2022,
			periodValue: 8
		}
	},
	{
		id: 21,
		title: 'Показатели',
		buttonId: 0,
		period: null
	},
	{
		id: 22,
		title: 'ОБ1',
		buttonId: 0,
		period: null
	},
	{
		id: 23,
		title: 'АСП',
		buttonId: 0,
		period: null
	},
	{
		id: 24,
		title: 'СБ',
		buttonId: 0,
		period: null
	},
	{
		id: 25,
		title: 'Паук',
		buttonId: 0,
		period: null
	},
	{
		id: 26,
		title: 'Барьер',
		buttonId: 0,
		period: null
	},
	{
		id: 27,
		title: 'Безусловные',
		buttonId: 18,
		period: null
	},
	{
		id: 28,
		title: 'Небезусловные',
		buttonId: 18,
		period: null
	},
	{
		id: 29,
		title: 'Полиграф',
		buttonId: 0,
		period: null
	},
	{
		id: 30,
		title: 'Общие',
		buttonId: 0,
		period: null
	},
	{
		id: 31,
		title: 'Служебные СКБ',
		buttonId: 0,
		period: null
	},
	{
		id: 32,
		title: 'ДД',
		buttonId: 0,
		period: null
	},
	{
		id: 33,
		title: 'СКБ',
		buttonId: 0,
		period: null
	},
	{
		id: 34,
		title: 'Продуктивность персонала',
		buttonId: 22,
		period: null
	},
	{
		id: 35,
		title: 'ГК',
		buttonId: 17,
		period: null
	},
	{
		id: 36,
		title: 'ОПА',
		buttonId: 17,
		period: null
	},
	{
		id: 37,
		title: 'Сервис',
		buttonId: 17,
		period: null
	},
	{
		id: 38,
		title: 'Фин.услуги',
		buttonId: 17,
		period: null
	},
	{
		id: 39,
		title: 'Трейд',
		buttonId: 17,
		period: null
	},
	{
		id: 40,
		title: 'Служебные ДД',
		buttonId: 0,
		period: null
	},
	{
		id: 41,
		title: 'Показатели дистрибьютора',
		buttonId: 29,
		period: null
	},
	{
		id: 42,
		title: 'Сохранность ТМЦ',
		buttonId: 0,
		period: null
	},
	{
		id: 43,
		title: 'УК',
		buttonId: 0,
		period: null
	},
	{
		id: 44,
		title: 'Управленческая эф-ть',
		buttonId: 30,
		period: null
	}
];
