import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DetailsService} from '../../services/details.service';
import {TIndicatorDetails} from '../../models/indicator.model';
import {Observable} from 'rxjs';
import {IAppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {selectDetails} from '../../../store/details/details.selectors';

@Component({
	selector: 'app-indicator-details',
	templateUrl: './indicator-details.page.html',
	styleUrls: ['./indicator-details.page.scss'],
})
export class IndicatorDetailsPage implements OnInit {
	details$: Observable<TIndicatorDetails>;

	constructor(
		public router: Router,
		public detailsService: DetailsService,
		private store: Store<IAppState>,
	) {
	}

	ngOnInit() {
		this.details$ = this.store.select(selectDetails);
	}
}


