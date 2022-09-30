import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PossessionsDetailTabsResolver implements Resolve<Observable<any>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<any>> |
		Promise<Observable<any>> |
		Observable<any> {
		return of([
			{
				path: 'info',
				icon: 'info',
			},
			{
				path: 'invest',
				icon: 'invest',
			},
			{
				path: 'docs',
				icon: 'docs'
			},
			{
				path: 'report',
				icon: 'report'
			}
		]);
	}

}
