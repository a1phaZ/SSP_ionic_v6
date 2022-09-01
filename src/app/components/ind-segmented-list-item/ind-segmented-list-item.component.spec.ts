import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndSegmentedListItemComponent } from './ind-segmented-list-item.component';

describe('IndSegmentedListItemComponent', () => {
  let component: IndSegmentedListItemComponent;
  let fixture: ComponentFixture<IndSegmentedListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndSegmentedListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndSegmentedListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
