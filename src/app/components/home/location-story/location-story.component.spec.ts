import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStoryComponent } from './location-story.component';

describe('LocationStoryComponent', () => {
  let component: LocationStoryComponent;
  let fixture: ComponentFixture<LocationStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
