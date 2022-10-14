import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DetailBasePageRoutingModule} from './detail-base-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailBasePageRoutingModule
	],
	declarations: []
})
export class DetailBasePageModule {
}
