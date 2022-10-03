import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InDevelopPageRoutingModule } from './in-develop-routing.module';

import { InDevelopPage } from './in-develop.page';
import {HeaderModule} from '../../components/app/header/header.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		InDevelopPageRoutingModule,
		HeaderModule
	],
  declarations: [InDevelopPage]
})
export class InDevelopPageModule {}
