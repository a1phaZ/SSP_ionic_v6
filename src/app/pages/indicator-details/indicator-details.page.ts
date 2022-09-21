import {AfterViewInit, ApplicationRef, Component, OnInit} from '@angular/core';
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
export class IndicatorDetailsPage implements OnInit,AfterViewInit {
	details$: Observable<TIndicatorDetails>;
	details: TIndicatorDetails;

	constructor(
		public router: Router,
		public detailsService: DetailsService,
		private store: Store<IAppState>,
		private appRef: ApplicationRef,
	) {
		this.store.select(selectDetails).subscribe((details) => {
			this.details = details;
			this.appRef.tick();
		});
	}

	ngOnInit() {
		// this.details$ = this.store.select(selectDetails);
	}

	ngAfterViewInit(): void {
	}


}


