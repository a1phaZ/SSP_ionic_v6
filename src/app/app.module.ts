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

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceModule, ComponentsModule],
	providers: [
		{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
		{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
