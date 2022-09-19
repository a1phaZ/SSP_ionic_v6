import {createReducer, on} from '@ngrx/store';
import * as PeriodPickerActions from './period-picker.actions';
import {TButton} from '../../app/models/button.model';
import {Icons} from '../../app/models/icons.model';
import {getValues} from 'src/app/shared/utils/period.utils';

export interface IPeriodState {
	buttonId: number;
	minYear?: number;
	maxYear?: number;
	periodId?: number;
	periodValue?: number;
	periodYear?: number;
	currentDate?: string;
	buttons?: TButton[];
}

export const initialState: IPeriodState[] = [];

const getDefaultPeriodValue = (periodValue) => {
	if (periodValue) {
		return {periodValue};
	}
	return new Date().getMonth() + 1;
};

/**
 * Инициализация периода
 *
 * @param state
 * @param type
 * @param buttonId
 * @param minYear
 * @param maxYear
 * @param periodValue
 * @param periodYear
 * @param periodId
 * @param buttons
 */
// eslint-disable-next-line max-len
const initializePeriod = (state, {
	type,
	buttonId,
	minYear = 2017,
	maxYear,
	periodValue,
	periodYear,
	periodId,
	buttons = PICKER_BUTTONS
}: any) => {
	console.log(type);
	const _state = [...state];
	const idx = _state.findIndex((item) => buttonId === item.buttonId);
	if (idx === -1) {
		return [
			...state,
			{
				buttonId,
				minYear,
				maxYear: maxYear ? maxYear : new Date().getFullYear(),
				periodValue: getDefaultPeriodValue(periodValue),
				periodYear: periodYear ? periodYear : new Date().getFullYear(),
				periodId: periodId ? periodId : 3,
				buttons,
			}
		];
	}

	// Возвращаем тот же стейт, если уже инициализировали
	return state;
};

export const periodPickerReducer = createReducer(
	initialState,
	on(PeriodPickerActions.initializePicker, initializePeriod),
	on(PeriodPickerActions.prevPeriodValue, (state, {type, buttonId}) => {
		console.log(type);
		const _state = [...state];
		const idx = _state.findIndex(({buttonId: id}) => buttonId === id);
		if (idx === -1) {
			return state;
		}
		const v = getValues(_state[idx].periodId, ARRAY_OF_MONTH_VALUES);
		_state[idx] = {
			..._state[idx],
			periodValue: _state[idx].periodValue > 1 ? _state[idx].periodValue - 1 : v.length,
			periodYear: _state[idx].periodValue > 1 ? _state[idx].periodYear : _state[idx].periodYear - 1,
		};
		return [..._state];
	}),
	on(PeriodPickerActions.nextPeriodValue, (state, {type, buttonId}) => {
		console.log(type);
		const _state = [...state];
		const idx = _state.findIndex(({buttonId: id}) => buttonId === id);
		if (idx === -1) {
			return state;
		}
		const v = getValues(_state[idx].periodId, ARRAY_OF_MONTH_VALUES);
		_state[idx] = {
			..._state[idx],
			periodValue: _state[idx].periodValue < v.length ? _state[idx].periodValue + 1 : 1,
			periodYear: _state[idx].periodValue < v.length ? _state[idx].periodYear : _state[idx].periodYear + 1,
		};
		return [..._state];
	}),
	on(PeriodPickerActions.changePeriodValue, (state, {type, buttonId, periodId, periodValue, periodYear}) => {
		console.log({type, buttonId, periodId, periodValue, periodYear});
		const _state = [...state];
		const idx = _state.findIndex(({buttonId: id}) => buttonId === id);
		if (idx === -1) {
			return state;
		}
		if (_state[idx].periodId === periodId && _state[idx].periodValue === periodValue && _state[idx].periodYear === periodYear) {
			return state;
		}
		_state[idx] = {
			..._state[idx],
			periodId,
			periodValue,
			periodYear
		};
		return [..._state];
	}),
);

const PICKER_BUTTONS: TButton[] = [
	{
		id: 3,
		name: Icons.month,
		text: 'Месяц',
		isSelected: true,
	},
	{
		id: 4,
		name: Icons.quaterYear,
		text: 'Квартал',
		isSelected: false,
	},
	{
		id: 5,
		name: Icons.halfYear,
		text: 'Полугодие',
		isSelected: false,
	},
	{
		id: 6,
		name: Icons.year,
		text: 'Год',
		isSelected: false,
	}
];

export const ARRAY_OF_MONTH_VALUES = [
	{
		id: 3,
		values: [
			{
				text: 'Январь',
				value: 1,
			},
			{
				text: 'Февраль',
				value: 2,
			},
			{
				text: 'Март',
				value: 3,
			},
			{
				text: 'Апрель',
				value: 4,
			},
			{
				text: 'Май',
				value: 5,
			},
			{
				text: 'Июнь',
				value: 6,
			},
			{
				text: 'Июль',
				value: 7,
			},
			{
				text: 'Август',
				value: 8,
			},
			{
				text: 'Сентябрь',
				value: 9,
			},
			{
				text: 'Октябрь',
				value: 10,
			},
			{
				text: 'Ноябрь',
				value: 11,
			},
			{
				text: 'Декабрь',
				value: 12,
			},
		]
	},
	{
		id: 4,
		values: [
			{
				text: '1-ый квартал',
				value: 1,
			},
			{
				text: '2-ой квартал',
				value: 2,
			},
			{
				text: '3-ий квартал',
				value: 3,
			},
			{
				text: '4-ый квартал',
				value: 4,
			},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},

		]
	},
	{
		id: 5,
		values: [
			{
				text: '1-ое полугодие',
				value: 1,
			},
			{
				text: '2-ое полугодие',
				value: 2,
			},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},

		]
	},
	{
		id: 6,
		values: [
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
			{value: -1, text: '', disabled: true},
		]
	}
];

