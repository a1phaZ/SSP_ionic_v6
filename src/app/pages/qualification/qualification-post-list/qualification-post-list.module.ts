import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualificationPostListPageRoutingModule } from './qualification-post-list-routing.module';

import { QualificationPostListPage } from './qualification-post-list.page';
import {HeaderModule} from '../../../components/app/header/header.module';
import {ComponentsModule} from '../../../components/components.module';
import {ItemsBarModule} from '../../../components/base/items-bar/items-bar.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		QualificationPostListPageRoutingModule,
		HeaderModule,
		ComponentsModule,
		ItemsBarModule
	],
  declarations: [QualificationPostListPage]
})
export class QualificationPostListPageModule {}
