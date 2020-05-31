import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitreResilierComponent } from './titre-resilier.component';

describe('TitreResilierComponent', () => {
  let component: TitreResilierComponent;
  let fixture: ComponentFixture<TitreResilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreResilierComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitreResilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
