import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTrajetTypeComponent } from './admin-trajet-type.component';

describe('AdminTrajetTypeComponent', () => {
  let component: AdminTrajetTypeComponent;
  let fixture: ComponentFixture<AdminTrajetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTrajetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTrajetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
