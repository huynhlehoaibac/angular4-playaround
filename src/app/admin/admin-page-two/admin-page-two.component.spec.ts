import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageTwoComponent } from './admin-page-two.component';

describe('AdminPageTwoComponent', () => {
  let component: AdminPageTwoComponent;
  let fixture: ComponentFixture<AdminPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
