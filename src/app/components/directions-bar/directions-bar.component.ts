import {Component, OnInit} from '@angular/core';
import {TDirection} from '../../models/direction.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {filterDirectionsList, setCurrentDirection} from '../../../store/directions/directions.actions';
import {switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {selectCurrentDirection, selectDirections} from '../../../store/directions/directions.selectors';
import {IAppState} from '../../../store/app.state';

@Component({
	selector: 'app-directions-bar',
	templateUrl: './directions-bar.component.html',
	styleUrls: ['../base/items-bar/items-bar.component.scss', './directions-bar.component.scss'],
})
export class DirectionsBarComponent implements OnInit {

	directionsList$: Observable<TDirection[]>;
	currentDirection$: Observable<number>;

	constructor(
		private route: ActivatedRoute,
		private store: Store<IAppState>,
	) {
		this.route.params.pipe(
			switchMap((data: { buttonId: number }) => {
				this.store.dispatch(filterDirectionsList({buttonId: Number(data.buttonId)}));
				return of(true);
			})
		).subscribe(() => {
			this.directionsList$ = this.store.select(selectDirections);
			this.currentDirection$ = this.store.select(selectCurrentDirection);
		});
	}

	ngOnInit() {

	}

	changeSelected(id: number) {
		this.store.dispatch(setCurrentDirection({directionId: id}));
	}


}
