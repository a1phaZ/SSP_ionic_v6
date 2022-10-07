import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {getInnerParams} from '../shared/utils/router.utils';

@Injectable({
	providedIn: 'root'
})
export class SecurityDetailResolver implements Resolve<Observable<any>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
		return of(ESecurityTitle[getInnerParams(state.root.children, 'security')]);
	}
}

enum ESecurityTitle {
	polygraph  = 'Полиграф'
};
