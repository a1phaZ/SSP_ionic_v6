import {NgModule} from '@angular/core';
import {ItemsBarComponent} from './items-bar.component';
import {CommonModule} from '@angular/common';

@NgModule({
	imports: [CommonModule],
	declarations: [ItemsBarComponent],
	exports: [ItemsBarComponent]
})
export class ItemsBarModule {}
