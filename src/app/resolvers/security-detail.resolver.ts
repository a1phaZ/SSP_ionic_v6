import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {getInnerParams} from '../shared/utils/router.utils';

@Injectable({
	providedIn: 'root'
})
export class SecurityDetailResolver implements Resolve<Observable<any>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<any>> |
		Promise<Observable<any>> |
		Observable<any> {
		const key =getInnerParams(state.root.children, 'security');
		return of({
			title: ESecurityTitle[key],
			showDetail: SHOW_DETAILS[key],
		});
	}
}

enum ESecurityTitle {
	polygraph = 'Полиграф',
	barrier = 'Барьер',
	safety = 'Сохранность ТМЦ'
}

const SHOW_DETAILS = {
	polygraph: true,
	barrier: true,
	safety: false,
};
