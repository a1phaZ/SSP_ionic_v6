import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {TResponse} from '../../models/response.model';
import {Router} from '@angular/router';
import {IAppState} from '../../../store/app.state';
import {Store} from '@ngrx/store';
import {resetDashboard} from '../../../store/dashboard/dashboard.actions';

@Component({
	selector: 'app-pin',
	templateUrl: './pin.page.html',
	styleUrls: ['./pin.page.scss'],
})
export class PinPage implements OnInit {

	pin: number[] = [];
	sendLogin: Subject<boolean> = new Subject<boolean>();

	constructor(
		// public loadingService: LoadingService
		private authService: AuthService,
		private router: Router,
		private store: Store<IAppState>,
	) {
	}

	ngOnInit() {
		this.sendLogin.pipe(
			switchMap(() => this.authService.login()),
			tap((data: TResponse) => console.log(data))
		).subscribe(() => {
			this.store.dispatch(resetDashboard());
			this.router.navigate(['dashboard'], {replaceUrl: true});
		});
	}

	logout(b: boolean) {

	}

	codeButtonClick(n: number) {
		this.pin.push(n);
		if (this.pin.length === 5) {
			this.sendLogin.next();
		}
	}

	codeDeleteClick() {
		this.pin.pop();
	}

	private login() {

	}
}
