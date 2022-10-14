import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {IAppState} from '../../store/app.state';
import {Store} from '@ngrx/store';
import {selectAppDashboard} from '../../store/app.selectors';
import {TDashboardItem} from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivateChild {
	selected: TDashboardItem;

	constructor(
		private store: Store<IAppState>,
		private router: Router,
	) {
		this.store.select(selectAppDashboard).subscribe(({selected}) => this.selected = selected);
	}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!this.selected) {
			this.router.navigate(['dashboard']);
		}
    return !!this.selected;
    // return true;
  }

}
