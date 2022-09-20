import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonDatetime} from '@ionic/angular';
import {IAppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {selectCurrentDate} from '../../../store/current-date/current-date.selectors';
import {setCurrentDate} from '../../../store/current-date/current-date.actions';
import {IPeriodState} from '../../../store/period-picker/period-picker.reducer';

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements AfterViewInit {

	@ViewChild('datetime') datetime: IonDatetime;
	buttonId: number;

	currentDate: string;
	period: IPeriodState;

	constructor(
		private store: Store<IAppState>,
	) {
		this.store.select(selectCurrentDate)
			.subscribe(({date, period, selected}) => {
				this.currentDate = date.currentDate;
				this.period = period;
				this.buttonId = selected;
			});
	}

	ngAfterViewInit(): void {
		this.datetime.ionChange.subscribe(({detail}) => {
			this.store.dispatch(setCurrentDate({
				buttonId: this.buttonId,
				date: detail.value as string,
				periodId: this.period.periodId
			}));
		});
	}


}
