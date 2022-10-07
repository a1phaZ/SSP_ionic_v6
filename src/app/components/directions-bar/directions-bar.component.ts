import {Component, OnInit} from '@angular/core';
import {TDirection} from '../../models/direction.model';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {filterDirectionsList, setCurrentDirection} from '../../../store/directions/directions.actions';
import {switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {selectCurrentDirection, selectDirections} from '../../../store/directions/directions.selectors';
import {IAppState} from '../../../store/app.state';
import {DirectionService} from '../../services/direction.service';
import {selectButtonId} from '../../../store/app.selectors';

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
		private directionService: DirectionService,
	) {
		this.route.params.pipe(
			withLatestFrom(this.store.select(selectButtonId)),
			switchMap(([,data]) => {
				this.store.dispatch(filterDirectionsList({buttonId: Number(data)}));
				return of(true);
			})
		).subscribe((data) => {
			this.directionsList$ = this.store.select(selectDirections).pipe(
				tap(console.log)
			);
			this.currentDirection$ = this.store.select(selectCurrentDirection);
		});
	}

	ngOnInit() {

	}

	changeSelected(id: number) {
		this.store.dispatch(setCurrentDirection({directionId: id}));
	}


}
