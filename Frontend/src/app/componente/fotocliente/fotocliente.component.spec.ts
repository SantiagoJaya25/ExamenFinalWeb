import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoclienteComponent } from './fotocliente.component';

describe('FotoclienteComponent', () => {
  let component: FotoclienteComponent;
  let fixture: ComponentFixture<FotoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
