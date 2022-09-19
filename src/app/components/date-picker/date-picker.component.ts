import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonDatetime} from '@ionic/angular';
import {IAppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {selectCurrentDate} from '../../../store/current-date/current-date.selectors';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
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

	currentDateState$: Observable<{ currentDate: string; period: IPeriodState }>;
	currentDate: string;
	period: IPeriodState;

	constructor(
		private store: Store<IAppState>,
		private route: ActivatedRoute,
	) {
		this.route.params.subscribe(({buttonId}) => this.buttonId = Number(buttonId));
		this.store.select(selectCurrentDate(this.buttonId))
			.subscribe(({date, period}) => {
				this.currentDate = date.currentDate;
				this.period = period;
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
