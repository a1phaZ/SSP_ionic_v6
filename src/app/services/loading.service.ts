import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor() {
	}

	get loading() {
		return this.isLoading;
	}

	set loading(l: any) {
		setTimeout(() => this.isLoading.next(l), 0);
	}

	// eslint-disable-next-line @typescript-eslint/member-ordering
	get loadingSync() {
		return this.isLoading.value;
	}
}
