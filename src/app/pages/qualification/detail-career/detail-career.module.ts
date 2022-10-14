import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailCareerPageRoutingModule } from './detail-career-routing.module';

import { DetailCareerPage } from './detail-career.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailCareerPageRoutingModule,
		ComponentsModule
	],
  declarations: [DetailCareerPage]
})
export class DetailCareerPageModule {}
