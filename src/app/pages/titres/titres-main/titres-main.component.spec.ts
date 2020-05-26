import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitresMainComponent } from './titres-main.component';

describe('TitresMainComponent', () => {
  let component: TitresMainComponent;
  let fixture: ComponentFixture<TitresMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitresMainComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitresMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
