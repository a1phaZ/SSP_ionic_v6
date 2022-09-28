import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {EAkuDirection} from '../pages/tabs/aku-tabs/aku-tabs.model';

@Injectable({
	providedIn: 'root'
})
export class AluCrisisResolver implements Resolve<Observable<number>> {

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<number>> |
		Promise<Observable<number>> |
		Observable<number> {
		return of(EAkuDirection[route.routeConfig.path]);
	}

}
