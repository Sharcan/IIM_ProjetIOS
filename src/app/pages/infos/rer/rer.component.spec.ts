import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RERComponent } from './rer.component';

describe('RERComponent', () => {
  let component: RERComponent;
  let fixture: ComponentFixture<RERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RERComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
