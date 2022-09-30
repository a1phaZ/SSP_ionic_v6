import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PossessionsListPageRoutingModule } from './possessions-list-routing.module';

import { PossessionsListPage } from './possessions-list.page';
import {AccordionModule} from '../../../components/app/accordion/accordion.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PossessionsListPageRoutingModule,
		AccordionModule
	],
  declarations: [PossessionsListPage]
})
export class PossessionsListPageModule {}
