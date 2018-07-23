import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaloginComponent } from './rutalogin.component';

describe('RutaloginComponent', () => {
  let component: RutaloginComponent;
  let fixture: ComponentFixture<RutaloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
