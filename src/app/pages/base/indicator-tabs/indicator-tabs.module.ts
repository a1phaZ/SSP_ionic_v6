import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorTabsPageRoutingModule } from './indicator-tabs-routing.module';

import { IndicatorTabsPage } from './indicator-tabs.page';
import {HeaderModule} from '../../../components/app/header/header.module';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		IndicatorTabsPageRoutingModule,
		HeaderModule,
		ComponentsModule
	],
  declarations: [IndicatorTabsPage]
})
export class IndicatorTabsPageModule {}
