import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonanteComponent } from './botonante.component';

describe('BotonanteComponent', () => {
  let component: BotonanteComponent;
  let fixture: ComponentFixture<BotonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
