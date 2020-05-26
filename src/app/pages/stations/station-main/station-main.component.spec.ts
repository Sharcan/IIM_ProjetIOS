import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationMainComponent } from './station-main.component';

describe('StationMainComponent', () => {
  let component: StationMainComponent;
  let fixture: ComponentFixture<StationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationMainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
