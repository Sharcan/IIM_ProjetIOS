import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitreNavigoComponent } from './titre-navigo.component';

describe('TitreNavigoComponent', () => {
  let component: TitreNavigoComponent;
  let fixture: ComponentFixture<TitreNavigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreNavigoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitreNavigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
