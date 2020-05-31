import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitreRenouvelerComponent } from './titre-renouveler.component';

describe('TitreRenouvelerComponent', () => {
  let component: TitreRenouvelerComponent;
  let fixture: ComponentFixture<TitreRenouvelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreRenouvelerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitreRenouvelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
