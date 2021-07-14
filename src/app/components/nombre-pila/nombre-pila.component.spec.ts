import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NombrePilaComponent } from './nombre-pila.component';

describe('NombrePilaComponent', () => {
  let component: NombrePilaComponent;
  let fixture: ComponentFixture<NombrePilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NombrePilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NombrePilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
