import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	@Input()
	title: string;
	@Input()
	buttons: {left?: string[]; right?: string[]};

	@Output()
	rightHandle: EventEmitter<any> = new EventEmitter<any>();

	@Output()
	leftHandle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
