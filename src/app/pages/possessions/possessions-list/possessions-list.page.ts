import {Component, OnInit} from '@angular/core';
import {IAppState} from '../../../../store/app.state';
import {Store} from '@ngrx/store';
import {selectPossessionsList} from '../../../../store/possessions/possessions.selector';
import {Observable} from 'rxjs';
import {TAccordionDataItem, TAccordionItem} from '../../../models/accordion.model';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {NavigationService} from '../../../services/navigation.service';

@Component({
	selector: 'app-possessions-list',
	templateUrl: './possessions-list.page.html',
	styleUrls: ['./possessions-list.page.scss'],
})
export class PossessionsListPage implements OnInit {

	list$: Observable<TAccordionDataItem[]>;

	constructor(
		private store: Store<IAppState>,
		private route: ActivatedRoute,
		private router: Router,
		private navigation: NavigationService
	) {
		this.list$ = this.route.params.pipe(
			switchMap(({filter}) => this.store.select(selectPossessionsList(filter)))
		);
		// this.store.select(selectPossessionsList('city')).subscribe(console.log); // city | div | brand_name
	}

	ngOnInit() {
	}

	openItem(item: TAccordionItem) {
		console.log(item);
		this.router.navigate([this.navigation.lastUrl, item.id]);
	}

}
