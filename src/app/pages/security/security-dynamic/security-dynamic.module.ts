import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityDynamicPageRoutingModule } from './security-dynamic-routing.module';

import { SecurityDynamicPage } from './security-dynamic.page';
import {ChartsModule} from '../../../components/charts/charts.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SecurityDynamicPageRoutingModule,
		ChartsModule
	],
  declarations: [SecurityDynamicPage]
})
export class SecurityDynamicPageModule {}
