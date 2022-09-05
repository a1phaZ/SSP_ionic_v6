import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArrayDescriptionListItemComponent } from './array-description-list-item.component';

describe('ArrayDescriptionListItemComponent', () => {
  let component: ArrayDescriptionListItemComponent;
  let fixture: ComponentFixture<ArrayDescriptionListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayDescriptionListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayDescriptionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
