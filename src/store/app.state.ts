import {IDashboardState} from './dashboard/dashboard.reducer';
import {IDirectionState} from './directions/directions.reducer';
import {IPeriodState} from './period-picker/period-picker.reducer';

export interface IAppState {
	dashboard: IDashboardState;
	directions: IDirectionState;
	periods: IPeriodState[];
}
