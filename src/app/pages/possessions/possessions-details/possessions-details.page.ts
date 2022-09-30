import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../../store/app.state';
import {map, tap} from 'rxjs/operators';
import {selectPossessionsDetails} from '../../../../store/possessions/possessions.selector';
import {combineLatest} from 'rxjs';
import {EPossessionsTabs} from '../../../models/possessions.model';

@Component({
	selector: 'app-possessions-details',
	templateUrl: './possessions-details.page.html',
	styleUrls: ['./possessions-details.page.scss'],
})
export class PossessionsDetailsPage implements OnInit {

	tabData$: any;
	gallery: any[];
	title: string;

	constructor(
		private route: ActivatedRoute,
		private store: Store<IAppState>,
	) {
		this.tabData$ = combineLatest([
			this.route.params,
			this.store.select(selectPossessionsDetails)
		]).pipe(
			tap(([d, details]) => {
				this.title = EPossessionsTabs[d.detail];
				this.gallery = details ? details.gallery : [];
			}),
			map(([d, details]) => {
				if (!details) { return null; }
				return details[`tab${d.detail}`];
			})
		);

		this.tabData$.subscribe(console.log);
	}

	ngOnInit() {
	}

}
