import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundsComponent } from './notfounds.component';

describe('NotfoundsComponent', () => {
  let component: NotfoundsComponent;
  let fixture: ComponentFixture<NotfoundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundsComponent]
    });
    fixture = TestBed.createComponent(NotfoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
