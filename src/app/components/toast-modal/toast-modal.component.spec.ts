import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastModalComponent } from './toast-modal.component';

describe('ToastModalComponent', () => {
  let component: ToastModalComponent;
  let fixture: ComponentFixture<ToastModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastModalComponent]
    });
    fixture = TestBed.createComponent(ToastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
