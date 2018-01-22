import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTComponent } from './find-t.component';

describe('FindTComponent', () => {
  let component: FindTComponent;
  let fixture: ComponentFixture<FindTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
