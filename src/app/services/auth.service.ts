import {Injectable} from '@angular/core';
import {WebApiService} from './web-api.service';
import {ApiModel} from '../models/api.model';
import {AppService} from './app.service';
import {tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {TResponse} from '../models/response.model';
import {prepareFormData} from '../shared/utils/api.utils';
import {environment} from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private apiService: WebApiService,
		private appService: AppService,
		private route: ActivatedRoute,
		private router: Router
	) {
	}

	/**
	 * Проверяем токен при старте приложения,
	 * если токен действительный, то перенаправляем на страницу ввода пин кода
	 * если токен не действительный, то на страницу авторизации
	 */
	checkToken() {
		const userHash = localStorage.getItem('userHash');
		const user = localStorage.getItem('user');
		const token = localStorage.getItem('token');
		this.apiService
			.post$(ApiModel.checkToken, prepareFormData({user, userHash, token}))
			.pipe(tap((data: TResponse) => {
				if (!data.payload && environment.production) {
					this.router.navigate(['/auth/login'], {replaceUrl: true});
				}
			}))
			.subscribe();
	}

	/**
	 * Авторизация по логину и паролю
	 *
	 * @param authObject
	 */
	authByLoginPass(authObject: { p: string; l: string }) {
		this.apiService
			.get$(ApiModel.authByLoginPass, authObject)
			.pipe(tap((data: TResponse) => {
				if (data.status === 'OK') {
					localStorage.setItem('user', data.payload.userId);
					localStorage.setItem('authKey', data.payload.id);

					this.router.navigate(['/pin'], {replaceUrl: true});
				}
			}))
			.subscribe();
	}

	/**
	 * Авторизация по пин коду и вход в приложение
	 */
	login() {
		const authKey = localStorage.getItem('authKey');
		const reqData = {
			deviceUuid: null,
			u: authKey,
			o: null,
			r: undefined,
			v: '3.4.5',
		};
		return this.apiService.get$(ApiModel.pin, reqData);
	}
}
