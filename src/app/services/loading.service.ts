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
		this.isLoading.next(l);
	}

	get loadingSync() {
		return this.isLoading.value;
	}
}
