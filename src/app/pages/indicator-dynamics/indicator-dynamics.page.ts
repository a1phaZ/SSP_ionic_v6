import {ApplicationRef, Component, OnInit} from '@angular/core';
import {IAppState} from '../../../store/app.state';
import {select, Store} from '@ngrx/store';
import {WebApiService} from '../../services/web-api.service';
import {ApiModel} from '../../models/api.model';
import {selectDynamicsRequest} from '../../../store/dynamics/dynamics.selectors';
import {Subject} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-indicator-dynamics',
  templateUrl: './indicator-dynamics.page.html',
  styleUrls: ['./indicator-dynamics.page.scss'],
})
export class IndicatorDynamicsPage implements OnInit {

	chartData: any;
	private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(
	  private store: Store<IAppState>,
	  private webApi: WebApiService,
	  private appRef: ApplicationRef,
  ) {
	  this.store.pipe(
		  select(selectDynamicsRequest),
		  tap(() => this.chartData = null),
		  takeUntil(this.ngUnsubscribe),
		  switchMap(data => this.makeRequest(data))
	  ).subscribe((response) => {
		  this.chartData = response;
		  this.appRef.tick();
	  });
  }

  ngOnInit() {
  }

  makeRequest(data) {
	  return this.webApi
		  .get$(ApiModel.getIndicatorDynamics, data);
  }

}
