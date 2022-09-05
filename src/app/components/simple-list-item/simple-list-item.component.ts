import {Component, Input} from '@angular/core';
import {ItemComponent} from '../list/item/item.component';
import {TSimpleItem} from '../../models/simple-item.model';

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.scss'],
})
export class SimpleListItemComponent extends ItemComponent{

	@Input()
	item: TSimpleItem;

  constructor() {
	  super();
  }

}
