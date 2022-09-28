import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AkuTabsPageRoutingModule} from './aku-tabs-routing.module';

import {AkuTabsPage} from './aku-tabs.page';
import {HeaderModule} from '../../../components/app/header/header.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		AkuTabsPageRoutingModule,
		HeaderModule,
	],
	declarations: [AkuTabsPage]
})
export class AkuTabsPageModule {
}
