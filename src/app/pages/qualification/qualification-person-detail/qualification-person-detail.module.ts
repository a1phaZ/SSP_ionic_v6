import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationPersonDetailPageRoutingModule } from './qualification-person-detail-routing.module';

import { QualificationPersonDetailPage } from './qualification-person-detail.page';
import {HeaderModule} from '../../../components/app/header/header.module';
import {ItemsBarModule} from '../../../components/base/items-bar/items-bar.module';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		QualificationPersonDetailPageRoutingModule,
		HeaderModule,
		ItemsBarModule,
		ComponentsModule
	],
  declarations: [QualificationPersonDetailPage]
})
export class QualificationPersonDetailPageModule {}
