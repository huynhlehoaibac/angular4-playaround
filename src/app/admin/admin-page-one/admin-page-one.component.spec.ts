import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageOneComponent } from './admin-page-one.component';

describe('AdminPageOneComponent', () => {
  let component: AdminPageOneComponent;
  let fixture: ComponentFixture<AdminPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
