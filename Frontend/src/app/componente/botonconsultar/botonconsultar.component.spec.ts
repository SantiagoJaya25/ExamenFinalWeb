import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonconsultarComponent } from './botonconsultar.component';

describe('BotonconsultarComponent', () => {
  let component: BotonconsultarComponent;
  let fixture: ComponentFixture<BotonconsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonconsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonconsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
