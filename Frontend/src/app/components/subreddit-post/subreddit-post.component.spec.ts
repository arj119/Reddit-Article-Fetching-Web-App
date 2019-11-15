import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditPostComponent } from './subreddit-post.component';

describe('SubredditPostComponent', () => {
  let component: SubredditPostComponent;
  let fixture: ComponentFixture<SubredditPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
