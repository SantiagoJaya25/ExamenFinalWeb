import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonsigComponent } from './botonsig.component';

describe('BotonsigComponent', () => {
  let component: BotonsigComponent;
  let fixture: ComponentFixture<BotonsigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonsigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
