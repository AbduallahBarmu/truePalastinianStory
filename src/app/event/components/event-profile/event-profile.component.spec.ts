import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventProfileComponent } from './event-profile.component';

describe('EventProfileComponent', () => {
  let component: EventProfileComponent;
  let fixture: ComponentFixture<EventProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventProfileComponent]
    });
    fixture = TestBed.createComponent(EventProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
