import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TTabs} from '../models/tabs.model';

@Injectable({
	providedIn: 'root'
})
export class DistributorRatingResolver implements Resolve<Observable<TTabs>>{
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<TTabs>> |
		Promise<Observable<TTabs>> |
		Observable<TTabs> {
		return of([{title: 'Показатели', path: 'rating'}, {title: 'Динамика', path: 'dynamic', dev: true}]);
	}

}
