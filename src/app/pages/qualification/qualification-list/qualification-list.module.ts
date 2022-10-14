import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationListPageRoutingModule } from './qualification-list-routing.module';

import { QualificationListPage } from './qualification-list.page';
import {HeaderModule} from '../../../components/app/header/header.module';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		QualificationListPageRoutingModule,
		HeaderModule,
		ComponentsModule
	],
  declarations: [QualificationListPage]
})
export class QualificationListPageModule {}
