import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AlertService} from './alert.service';

@Injectable({
	providedIn: 'root'
})
export class CrisisService {

	private filter$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(
		private alertService: AlertService,
	) {
	}

	get filter() {
		return this.filter$ as Observable<boolean>;
	}

	// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
	setFilter() {
		this.filter$.next(!this.value);
		this.alertService.presentToast(
			this.value ? 'Отображаются проблемные' : 'Отображаются все',
			'bottom',
			'info',
			1000
		);
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	get value() {
		return this.filter$.value;
	}

	destroy() {
		this.filter$.next(null);
		// this.filter$.complete();
	}

}
