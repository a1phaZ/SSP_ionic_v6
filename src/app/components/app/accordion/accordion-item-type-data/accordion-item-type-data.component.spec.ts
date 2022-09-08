import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionItemTypeDataComponent } from './accordion-item-type-data.component';

describe('AccordionItemTypeDataComponent', () => {
  let component: AccordionItemTypeDataComponent;
  let fixture: ComponentFixture<AccordionItemTypeDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionItemTypeDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionItemTypeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
