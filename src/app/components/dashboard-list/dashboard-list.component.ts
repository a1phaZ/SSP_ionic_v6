import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {

	@Input() list: any[];

  constructor() { }

  ngOnInit() {}

}
