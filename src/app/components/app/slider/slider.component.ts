import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

	@Input()
	slides: any[];

	slideOpts = {
		initialSlide: 0,
		speed: 400,
		spaceBetween: 100,
		autoplay: true
	};

  constructor() { }

  ngOnInit() {}

}
