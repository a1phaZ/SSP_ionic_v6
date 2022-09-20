import {createAction, props} from '@ngrx/store';
import {TIndicatorDetails} from '../../app/models/indicator.model';

export const setDetails = createAction(
	'[Details] Set Details',
	props<{buttonId: number; details: TIndicatorDetails}>()
);
