import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-security-method',
  templateUrl: './security-method.page.html',
  styleUrls: ['./security-method.page.scss'],
})
export class SecurityMethodPage implements OnInit {

	method: IReferenceData;

  constructor(
	  private route: ActivatedRoute,
  ) {
	  console.log(this.route.snapshot.data);
	  this.method = this.route.snapshot.data.method as IReferenceData;
  }

  ngOnInit(

  ) {
  }

}

export interface IReferenceData {
	sectionHorizontalTitle: string;
	sectionVerticalTitle: string;
	sectionDescription?: string;
	isDescr: boolean;
	isHeaderContent: boolean;
	data: { termin: string; condition: string; descr?: string; color?: string; }[];
}
