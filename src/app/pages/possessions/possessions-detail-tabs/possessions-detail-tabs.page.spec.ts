import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PossessionsDetailTabsPage } from './possessions-detail-tabs.page';

describe('PossessionsDetailTabsPage', () => {
  let component: PossessionsDetailTabsPage;
  let fixture: ComponentFixture<PossessionsDetailTabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessionsDetailTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PossessionsDetailTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
