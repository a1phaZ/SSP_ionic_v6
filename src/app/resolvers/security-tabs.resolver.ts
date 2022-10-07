import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TTabs} from '../models/tabs.model';
import {Icons} from '../models/icons.model';

@Injectable({
	providedIn: 'root'
})
export class SecurityTabsResolver implements Resolve<Observable<TTabs>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<TTabs>> |
		Promise<Observable<TTabs>> |
		Observable<TTabs> {
		return of([
			{
				title: 'Рейтинг дивизионов',
				path: 'rating'
			},
			{
				title: 'Динамика',
				path: 'dynamic',
				buttons: {
					right: [{name: Icons.filter}]
				}
			},
			{
				title: 'Формула/ Методика',
				path: 'method'
			}
		] as TTabs);
	}
}
