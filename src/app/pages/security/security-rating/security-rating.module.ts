import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityRatingPageRoutingModule } from './security-rating-routing.module';

import { SecurityRatingPage } from './security-rating.page';
import {ComponentsModule} from '../../../components/components.module';
import {TableModule} from '../../../components/base/table/table.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SecurityRatingPageRoutingModule,
		ComponentsModule,
		TableModule
	],
  declarations: [SecurityRatingPage]
})
export class SecurityRatingPageModule {}
