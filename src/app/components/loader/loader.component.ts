import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-loader',
	template: '<div class="page-loader"></div>',
	styles: [`
      .page-loader{
        position: absolute;
        z-index: 11;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
		  background: rgba(34, 47, 59, .2) url(../../../assets/imgs/loader12.svg) center center no-repeat;
      }
  `]
})
export class LoaderComponent {

  constructor() { }

}
