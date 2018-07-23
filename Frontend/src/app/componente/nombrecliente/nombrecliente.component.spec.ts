import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreclienteComponent } from './nombrecliente.component';

describe('NombreclienteComponent', () => {
  let component: NombreclienteComponent;
  let fixture: ComponentFixture<NombreclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombreclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombreclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
