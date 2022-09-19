import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BasePageRoutingModule} from './base-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		BasePageRoutingModule,
	],
	declarations: []
})
export class BasePageModule {
}
