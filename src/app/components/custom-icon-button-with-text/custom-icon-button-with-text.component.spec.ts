import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomIconButtonWithTextComponent } from './custom-icon-button-with-text.component';

describe('CustomIconButtonWithTextComponent', () => {
  let component: CustomIconButtonWithTextComponent;
  let fixture: ComponentFixture<CustomIconButtonWithTextComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIconButtonWithTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIconButtonWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
