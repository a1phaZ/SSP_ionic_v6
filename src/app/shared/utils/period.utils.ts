import {PickerColumnOption} from '@ionic/angular';

export const getValues = (periodId: number, array): PickerColumnOption[] => {
	const v = array.find(({id}) => id === periodId);
	if (!v) {
		return null;
	}
	return v.values.filter(({disabled}) => !disabled) as PickerColumnOption[];
};

export const getPeriod = (date: string, periodId: number) => {
	const _d = new Date(date);
	const value = _d.getMonth();
	const year = _d.getFullYear();

	switch (periodId) {
		case 4: {
			return {
				periodValue: Math.floor((value + 3) / 3),
				periodYear: year,
			};
		}
		case 5: {
			return {
				periodValue: Math.floor((value + 6) / 6),
				periodYear: year,
			};
		}
		case 6: {
			return {
				periodValue: Math.floor((value + 12) / 12),
				periodYear: year,
			};
		}
		default: {
			return {
				periodValue: value + 1,
				periodYear: year,
			};
		}
	}
};
