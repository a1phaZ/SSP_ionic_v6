import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PossessionsDetailsPageRoutingModule } from './possessions-details-routing.module';

import { PossessionsDetailsPage } from './possessions-details.page';
import {AccordionModule} from '../../../components/app/accordion/accordion.module';
import {SliderModule} from '../../../components/app/slider/slider.module';
import {GalleryModule} from '../../../components/app/gallery/gallery.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		PossessionsDetailsPageRoutingModule,
		AccordionModule,
		SliderModule,
		GalleryModule
	],
  declarations: [PossessionsDetailsPage]
})
export class PossessionsDetailsPageModule {}
