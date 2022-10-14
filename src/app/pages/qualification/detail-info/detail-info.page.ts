import {Component, OnInit} from '@angular/core';
import {EQualificationDetailMethods} from '../../../models/qualification.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {WebApiService} from '../../../services/web-api.service';
import {DetailBasePage} from '../detail-base/detail-base.page';

@Component({
	selector: 'app-detail-info',
	templateUrl: './detail-info.page.html',
	styleUrls: ['./detail-info.page.scss'],
})
export class DetailInfoPage extends DetailBasePage implements OnInit {
	method = EQualificationDetailMethods.loadQualificationUserFullInfo;

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
