import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TTabs} from '../models/tabs.model';
import {EAkuTabsModel, EAkuTabsNames} from '../pages/tabs/aku-tabs/aku-tabs.model';

@Injectable({
	providedIn: 'root'
})
export class AkuTabsResolver implements Resolve<Observable<TTabs>> {
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
		Observable<Observable<TTabs>> |
		Promise<Observable<TTabs>> |
		Observable<TTabs> {
		return of([
			{
				title: EAkuTabsNames[EAkuTabsModel.main],
				path: EAkuTabsModel.main
			},
			{
				title: EAkuTabsNames[EAkuTabsModel.finance],
				path: EAkuTabsModel.finance
			},
			{
				title: EAkuTabsNames[EAkuTabsModel.opa],
				path: EAkuTabsModel.opa
			},
			{
				title: EAkuTabsNames[EAkuTabsModel.service],
				path: EAkuTabsModel.service
			}
		]);
	}

}
