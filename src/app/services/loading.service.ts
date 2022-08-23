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
		return this.isLoading.asObservable();
	}

	set loading(l: any) {
		this.isLoading.next(l);
	}
}
