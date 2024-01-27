import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveUpdatesComponent } from './live-updates.component';

describe('LiveUpdatesComponent', () => {
  let component: LiveUpdatesComponent;
  let fixture: ComponentFixture<LiveUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveUpdatesComponent]
    });
    fixture = TestBed.createComponent(LiveUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
