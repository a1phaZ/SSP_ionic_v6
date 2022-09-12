import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ServiceModule} from './services/service.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {ComponentsModule} from './components/components.module';
import {HighchartsChartModule} from 'highcharts-angular';

import { StoreModule } from '@ngrx/store';
import {  dashboardReducer  } from '../store/dashboard/dashboard.reducer';
import {directionsReducer} from '../store/directions/directions.reducer';
import {periodPickerReducer} from '../store/period-picker/period-picker.reducer';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		ServiceModule,
		ComponentsModule,
		HighchartsChartModule,
		StoreModule.forRoot({
			dashboard: dashboardReducer,
			directions: directionsReducer,
			periods: periodPickerReducer,
		})
	],
	providers: [
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
