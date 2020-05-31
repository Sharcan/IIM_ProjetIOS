import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitrePerduComponent } from './titre-perdu.component';

describe('TitrePerduComponent', () => {
  let component: TitrePerduComponent;
  let fixture: ComponentFixture<TitrePerduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitrePerduComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitrePerduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
