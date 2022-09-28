import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AkuMainPageRoutingModule} from './aku-main-routing.module';

import {AkuMainPage} from './aku-main.page';
import {ItemsBarModule} from '../../../components/base/items-bar/items-bar.module';
import {TableModule} from '../../../components/base/table/table.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AkuMainPageRoutingModule,
		ItemsBarModule,
		TableModule
	],
	declarations: [AkuMainPage]
})
export class AkuMainPageModule {
}
