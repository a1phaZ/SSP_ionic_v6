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
import {detailsReducer} from '../store/details/details.reducer';
import {DetailsEffects} from '../store/details/details.effects';
import {RatingEffects} from '../store/rating/rating.effects';
import {ratingReducer} from '../store/rating/rating.reducer';
import {InfluenceEffects} from '../store/influence/influence.effects';
import {influenceReducer} from '../store/influence/influence.reducer';
import {PossessionsEffects} from '../store/possessions/possessions.effects';
import {possessionsReducer} from '../store/possessions/possessions.reducer';

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
			details: detailsReducer,
			rating: ratingReducer,
			influence: influenceReducer,
			possessions: possessionsReducer,
		}),
		EffectsModule.forRoot([
			OrganizationsEffects,
			PeriodPickerEffects,
			CurrentDateEffects,
			DetailsEffects,
			RatingEffects,
			InfluenceEffects,
			PossessionsEffects,
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
