import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {HeaderModule} from '../../components/app/header/header.module';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DashboardPageRoutingModule,
		HeaderModule,
		ComponentsModule
	],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
