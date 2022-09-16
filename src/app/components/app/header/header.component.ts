import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {THeaderButtons} from '../../../models/button.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	@Input()
	primaryTitle: string;
	@Input()
	secondaryTitle: string;
	@Input()
	tertiaryTitle: string;

	@Input()
	buttons: THeaderButtons;

	@Output()
	rightHandle: EventEmitter<any> = new EventEmitter<any>();

	@Output()
	leftHandle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
