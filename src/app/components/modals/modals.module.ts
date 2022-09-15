import {NgModule} from '@angular/core';
import {SelectComponent} from './select/select.component';
import {HeaderModule} from '../app/header/header.module';
import {IonicModule} from '@ionic/angular';
import {OrgsListModule} from '../orgs-list/orgs-list.module';
import {CommonModule} from '@angular/common';
import {ItemsBarModule} from '../base/items-bar/items-bar.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
	declarations: [SelectComponent],
	imports: [
		HeaderModule,
		IonicModule,
		OrgsListModule,
		CommonModule,
		ItemsBarModule,
		PipesModule
	],
	exports: [SelectComponent]
})
export class ModalsModule {}
