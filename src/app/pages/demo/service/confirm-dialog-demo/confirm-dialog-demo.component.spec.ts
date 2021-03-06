import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogDemoComponent } from './confirm-dialog-demo.component';

describe('ConfirmDialogDemoComponent', () => {
  let component: ConfirmDialogDemoComponent;
  let fixture: ComponentFixture<ConfirmDialogDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
