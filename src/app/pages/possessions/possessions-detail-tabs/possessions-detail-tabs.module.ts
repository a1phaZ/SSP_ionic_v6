import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PossessionsDetailTabsPageRoutingModule} from './possessions-detail-tabs-routing.module';

import {PossessionsDetailTabsPage} from './possessions-detail-tabs.page';
import {HeaderModule} from '../../../components/app/header/header.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PossessionsDetailTabsPageRoutingModule,
		HeaderModule
	],
	declarations: [PossessionsDetailTabsPage]
})
export class PossessionsDetailTabsPageModule {
}
