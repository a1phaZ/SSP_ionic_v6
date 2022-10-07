import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityDetailPageRoutingModule } from './security-detail-routing.module';

import { SecurityDetailPage } from './security-detail.page';
import {HeaderModule} from '../../../components/app/header/header.module';
import {ComponentsModule} from '../../../components/components.module';
import {LegendTableModule} from '../../../components/legend-table/legend-table.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SecurityDetailPageRoutingModule,
		HeaderModule,
		ComponentsModule,
		LegendTableModule
	],
  declarations: [SecurityDetailPage]
})
export class SecurityDetailPageModule {}
