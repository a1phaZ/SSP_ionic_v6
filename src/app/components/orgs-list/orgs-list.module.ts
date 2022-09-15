import {NgModule} from '@angular/core';
import {OrgsListComponent} from './orgs-list.component';
import {CommonModule} from '@angular/common';
import {OrgListItemComponent} from '../org-list-item/org-list-item.component';
import {CustomIconButtonModule} from '../custom-icon-button/custom-icon.button.module';
import {LogoModule} from '../app/logo/logo.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
	imports: [CommonModule, CustomIconButtonModule, LogoModule, PipesModule],
	declarations: [OrgsListComponent, OrgListItemComponent],
	exports: [OrgsListComponent, OrgListItemComponent]
})
export class OrgsListModule {}
