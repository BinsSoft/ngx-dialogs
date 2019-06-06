import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDialogsComponent } from './ngx-dialogs.component';

describe('NgxDialogsComponent', () => {
  let component: NgxDialogsComponent;
  let fixture: ComponentFixture<NgxDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
