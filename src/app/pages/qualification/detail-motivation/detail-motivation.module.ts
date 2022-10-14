import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMotivationPageRoutingModule } from './detail-motivation-routing.module';

import { DetailMotivationPage } from './detail-motivation.page';
import {ComponentsModule} from '../../../components/components.module';
import {ItemsBarModule} from '../../../components/base/items-bar/items-bar.module';
import {CustomIconButtonModule} from '../../../components/custom-icon-button/custom-icon.button.module';
import {YearPickerModule} from '../../../components/year-picker/year-picker.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		DetailMotivationPageRoutingModule,
		ComponentsModule,
		ItemsBarModule,
		CustomIconButtonModule,
		YearPickerModule
	],
  declarations: [DetailMotivationPage]
})
export class DetailMotivationPageModule {}
