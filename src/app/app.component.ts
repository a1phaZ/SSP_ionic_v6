import { Component } from '@angular/core';
import {AppService} from './services/app.service';
import {Platform} from '@ionic/angular';
import {WebApiService} from './services/web-api.service';
import {AuthService} from './services/auth.service';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private appService: AppService,
    private apiService: WebApiService,
    private authService: AuthService,
	public loadingService: LoadingService,
    private platform: Platform
  ) {
    platform.ready().then(async () => {
      // Получаем валидный url
      this.apiService.getValidUrl();
      this.authService.checkToken();
	});
  }
}
