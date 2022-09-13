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

	async presentToast(message: string, position: 'top' | 'bottom', cssClass: string | null = null) {
		this.toast = await this.toastCtrl.create({
			message,
			// duration: 10000,
			position,
			cssClass: cssClass && `toast__${cssClass}`,
			buttons: [{
				text: 'x',
			}]
		});
		this.toast.present();
	}

	async dismissToast() {
		return this.toast.dismiss();
	}
}
