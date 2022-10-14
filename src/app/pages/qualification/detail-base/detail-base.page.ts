import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {EQualificationDetailMethods} from '../../../models/qualification.model';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {WebApiService} from '../../../services/web-api.service';
import {selectQualificationPersonDetailRequest} from '../../../../store/qualification/qualification.selector';
import {mergeMap} from 'rxjs/operators';
import {ApiModel} from '../../../models/api.model';

@Component({
  selector: 'app-detail-base',
})
export abstract class DetailBasePage implements OnInit {
	data$: Observable<any>;
	abstract method: EQualificationDetailMethods;

	protected constructor(
		public route: ActivatedRoute,
		public store: Store<IAppState>,
		public webApi: WebApiService
	) {
	}

	ngOnInit() {
		this.init();
	}

	init() {
		this.data$ = this.store
			.pipe(
				select(selectQualificationPersonDetailRequest(this.method)),
				mergeMap(data => this.makeRequest(data))
			);
	}

	makeRequest(data) {
		return this.webApi
			.get$(ApiModel.qualification, data);
	}

}
