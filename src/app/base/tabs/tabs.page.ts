import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITabsPageConfig, TabsPageConfig} from '../../shared/tabs-page-config.class';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  config: ITabsPageConfig;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe((data: ITabsPageConfig) => {
      this.config = new TabsPageConfig(data.header, data.tabs);
    });
  }

  ngOnInit() {

  }

}
