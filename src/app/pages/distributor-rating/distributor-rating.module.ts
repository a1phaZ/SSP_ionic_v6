import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistributorRatingPageRoutingModule } from './distributor-rating-routing.module';

import { DistributorRatingPage } from './distributor-rating.page';
import {HeaderModule} from '../../components/app/header/header.module';
import {DistributorRatingList} from '../../components/distributor-rating-list/distributor-rating-list';
import {ItemsBarModule} from '../../components/base/items-bar/items-bar.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DistributorRatingPageRoutingModule,
		HeaderModule,
		DistributorRatingList,
		ItemsBarModule
	],
  declarations: [DistributorRatingPage]
})
export class DistributorRatingPageModule {}
