import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMemoPageRoutingModule } from './detail-memo-routing.module';

import { DetailMemoPage } from './detail-memo.page';
import {ComponentsModule} from '../../../components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailMemoPageRoutingModule,
		ComponentsModule
	],
  declarations: [DetailMemoPage]
})
export class DetailMemoPageModule {}
