import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TTabs} from '../models/tabs.model';
import {Observable, of} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PossessionsTabsResolver implements Resolve<Observable<TTabs>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<TTabs>> |
		Promise<Observable<TTabs>> |
		Observable<TTabs> {
		return of([
			{
				title: 'ДЦ',
				path: 'city',
			},
			{
				title: 'Дивизион',
				path: 'div',
			},
			{
				title: 'Бренд',
				path: 'brands'
			}
		]);
	}
}
