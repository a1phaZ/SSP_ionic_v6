import {NgModule} from '@angular/core';
import {DetailsComponent} from './details.component';
import {CommonModule} from '@angular/common';
import {BlockComponent} from './block/block.component';
import {ItemTextComponent} from './block/item-text/item-text.component';
import {ItemBarComponent} from './block/item-bar/item-bar.component';
import {IonicModule} from '@ionic/angular';
import {PipesModule} from '../../../pipes/pipes.module';
import {DatePickerComponent} from '../../date-picker/date-picker.component';

@NgModule({
	declarations: [DetailsComponent, BlockComponent, ItemTextComponent, ItemBarComponent, DatePickerComponent],
	imports: [
		CommonModule,
		IonicModule,
		PipesModule
	],
	exports: [DetailsComponent, BlockComponent, ItemTextComponent, ItemBarComponent]
})
export class DetailsModule {}
