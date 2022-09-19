import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
	lastUrl: string;
	private history: string[] = [];

  constructor(
	  private router: Router,
	  private location: Location
  ) {
	  this.router.events.subscribe((event) => {
		  if (event instanceof NavigationEnd) {
			  // console.log(event);
			  this.lastUrl = event.urlAfterRedirects;
			  this.history.push(event.urlAfterRedirects);
		  }
	  });
  }

  back(): void {
	  this.history.pop();
	  if (this.history.length > 0) {
		  this.location.back();
		  this.lastUrl = this.history[this.history.length];
		  // this.router.navigate([this.lastUrl]);
	  } else {
		  this.router.navigateByUrl('/');
	  }
  }
}
