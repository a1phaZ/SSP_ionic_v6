import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

	replaceNBSP(str: string): string {
		return str.replace(/&nbsp;/g, ' ');
	}
}
