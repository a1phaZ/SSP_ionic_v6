import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class AlertService {

	toast: any;

	constructor(
		private toastCtrl: ToastController,
	) {
	}

	async presentToast(message: string, position: 'top' | 'bottom', cssClass: string = '', duration: number = 0) {
		this.toast = await this.toastCtrl.create({
			message,
			duration,
			position,
			cssClass: cssClass && `toast__${cssClass}`,
			buttons: duration === 0 ? [{text: 'x',}] : null
		});
		this.toast.present();
	}

	async dismissToast() {
		return this.toast.dismiss();
	}
}
