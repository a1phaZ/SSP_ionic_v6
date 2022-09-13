import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';
import {AlertService} from '../services/alert.service';
import {getErrorMessage} from '../shared/utils/error.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private loadingService: LoadingService,
		private alertService: AlertService
	) {
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// this.loadingService.loading = true;
		const clonedReq = req.clone({
			setHeaders: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			params: (req.params ? req.params : new HttpParams())
				.set('token', localStorage.getItem('token'))
		});

		return next.handle(clonedReq)
			.pipe(
				tap((event) => {
					if (event['body'] && event['body'].payload && event['body'].payload.token) {
						localStorage.setItem('token', event['body'].payload.token);
					}
					if (event instanceof HttpResponse) {
						// this.loadingService.loading = false;
					}
				}),
				catchError(err => {
					this.alertService.presentToast(getErrorMessage(err), 'top', 'error');
					this.loadingService.loading = false;
					return throwError(err);
				})
			);
	}
}
