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

import {StoreModule} from '@ngrx/store';
import {dashboardReducer} from '../store/dashboard/dashboard.reducer';
import {directionsReducer} from '../store/directions/directions.reducer';
import {periodPickerReducer} from '../store/period-picker/period-picker.reducer';
import {organizationsReducer} from '../store/organizations/organizations.reducer';
import {EffectsModule} from '@ngrx/effects';
import {OrganizationsEffects} from '../store/organizations/organizations.effects';
import {PeriodPickerEffects} from '../store/period-picker/period-picker.effects';
import {currentDateReducer} from '../store/current-date/current-date.reducer';
import {CurrentDateEffects} from '../store/current-date/current-date.effects';

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
			organizations: organizationsReducer,
			currentDate: currentDateReducer,
		}),
		EffectsModule.forRoot([
			OrganizationsEffects,
			PeriodPickerEffects,
			CurrentDateEffects
		]),
	],
	providers: [
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
