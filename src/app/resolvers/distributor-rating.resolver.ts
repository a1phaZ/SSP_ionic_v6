import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DistributorRatingResolver implements Resolve<Observable<Array<{title: string; path: string}>>>{
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<Array<{title: string; path: string}>>> |
		Promise<Observable<Array<{title: string; path: string}>>> |
		Observable<Array<{title: string; path: string}>> {
		return of([{title: 'Показатели', path: 'rating'}, {title: 'Динамика', path: 'dynamic'}]);
	}

}
