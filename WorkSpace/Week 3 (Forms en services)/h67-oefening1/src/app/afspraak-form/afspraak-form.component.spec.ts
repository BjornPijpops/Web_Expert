import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfspraakFormComponent } from './afspraak-form.component';

describe('AfspraakFormComponent', () => {
  let component: AfspraakFormComponent;
  let fixture: ComponentFixture<AfspraakFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfspraakFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfspraakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
