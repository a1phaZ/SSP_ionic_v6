import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {selectPeriodByMethod} from '../../../store/qualification/qualification.selector';
import {EQualificationDetailMethods} from '../../models/qualification.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {setQualificationPeriod} from '../../../store/qualification/qualification.actions';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
})
export class YearPickerComponent implements OnInit, OnDestroy {

	isOpen = false;
	method: EQualificationDetailMethods = EQualificationDetailMethods.getMotivation;
	period: any;
	value: string;
	private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(
	  private store: Store<IAppState>
  ) {
	  this.store.pipe(
		  takeUntil(this.ngUnsubscribe),
		  select(selectPeriodByMethod(this.method))
	  ).subscribe((period) => {
		  this.period = period;
		  this.value = Intl
			  .DateTimeFormat('ru-RU', {month: 'long', year: 'numeric'})
			  .format(new Date(`${period.periodYear}-${period.periodValue}-01`)).split(' г.')[0];
	  });
  }

  ngOnInit() {
	  console.log(this.period);
  }

	pickerToggle() {
		this.isOpen = !this.isOpen;
	}

	ngOnDestroy(): void {
	  this.ngUnsubscribe.next();
	  this.ngUnsubscribe.complete();
	}

	calculatePeriod(_number: number) {
		this.store.dispatch(setQualificationPeriod({
			method: this.method,
			periodYear: this.period.periodYear + _number
		}));
	}
}
