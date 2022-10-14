import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {EQualificationDetailMethods} from '../../../models/qualification.model';
import {WebApiService} from '../../../services/web-api.service';
import {DetailBasePage} from '../detail-base/detail-base.page';

@Component({
	selector: 'app-detail-career',
	templateUrl: './detail-career.page.html',
	styleUrls: ['./detail-career.page.scss'],
})
export class DetailCareerPage extends DetailBasePage implements OnInit {
	method = EQualificationDetailMethods.getCareer;

	constructor(
		public route: ActivatedRoute,
		public store: Store<IAppState>,
		public webApi: WebApiService
	) {
		super(route, store, webApi);
	}

	ngOnInit() {
		super.ngOnInit();
	}

}
