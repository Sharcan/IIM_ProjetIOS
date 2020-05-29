import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TramComponent } from './tram.component';

describe('TramComponent', () => {
  let component: TramComponent;
  let fixture: ComponentFixture<TramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TramComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
