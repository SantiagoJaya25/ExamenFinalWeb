import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotontranferirComponent } from './botontranferir.component';

describe('BotontranferirComponent', () => {
  let component: BotontranferirComponent;
  let fixture: ComponentFixture<BotontranferirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotontranferirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotontranferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
