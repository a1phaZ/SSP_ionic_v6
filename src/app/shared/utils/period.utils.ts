import {PickerColumnOption} from '@ionic/angular';

export const getValues = (periodId: number, array): PickerColumnOption[] => {
	const v = array.find(({id}) => id === periodId);
	if (!v) {
		return null;
	}
	return v.values as PickerColumnOption[];
};
