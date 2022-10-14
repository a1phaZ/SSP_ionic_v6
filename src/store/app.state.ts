import {IDashboardState} from './dashboard/dashboard.reducer';
import {IDirectionState} from './directions/directions.reducer';
import {IPeriodState} from './period-picker/period-picker.reducer';
import {IOrganizationsState} from './organizations/organizations.reducer';
import {ICurrentDateState} from './current-date/current-date.reducer';
import {IDetailsState} from './details/details.reducer';
import {IQualificationState} from './qualification/qualification.reducer';

export interface IAppState {
	dashboard: IDashboardState;
	directions: IDirectionState;
	periods: IPeriodState[];
	organizations: IOrganizationsState;
	currentDate: ICurrentDateState;
	details: IDetailsState;
	qualification: IQualificationState;
}
