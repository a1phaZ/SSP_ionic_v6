import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

	private filter$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor(
		private toastCtrl: ToastController,
	) {
	}

	get filter() {
		return this.filter$ as Observable<boolean>;
	}

	get value() {
		return this.filter$.value;
	}

	// eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
	set filter(b) {
		this.filter$.next(!this.value);
		this.presentToast(
			this.value ? 'Отображаются проблемные' : 'Отображаются все',
			'bottom'
		);
	}

	destroy() {
		this.filter$.next(null);
		// this.filter$.complete();
	}

	async presentToast(message, position, duration = 1000) {
		const toast = await this.toastCtrl.create({
			message,
			duration,
			position,
			// showCloseButton: true,
			// closeButtonText: window.localStorage.getItem('devicePlatform') == 'iOS' ? 'Обновить' : 'Закрыть'
		});

		await toast.present();
	}



}
