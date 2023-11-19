import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineEventComponent } from './time-line-event.component';

describe('TimeLineEventComponent', () => {
  let component: TimeLineEventComponent;
  let fixture: ComponentFixture<TimeLineEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLineEventComponent]
    });
    fixture = TestBed.createComponent(TimeLineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
