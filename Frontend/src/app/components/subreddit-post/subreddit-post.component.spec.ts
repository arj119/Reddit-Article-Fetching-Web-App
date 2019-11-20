import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SubredditPostComponent} from './subreddit-post.component';
import {SubredditPost} from "../../DTOs/SubredditTopResponse";
import {Component} from "@angular/core";
import {by} from "protractor";

describe('SubredditPostComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubredditPostComponent, TestHostComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should display the title of the subreddit', () => {
    expect(testHostFixture.nativeElement.querySelector(by.id('post-title')).getText()).toEqual('Test title');
  });

  it('should display the title of the subreddit', () => {
    expect(testHostFixture.nativeElement.querySelector(by.id('post-author')).getText()).toEqual('Test author');
  });

  it('should display the image as image contains \".jpg\"', () => {
    expect(testHostFixture.nativeElement.querySelector(by.id('post-image'))).toBeTruthy();
  });

  it('should display the post\'s ups', () => {
    expect(testHostFixture.nativeElement.querySelector(by.id('post-ups')).getText()).toEqual('&#11014; 76931 &#11015;');
  });


  @Component({
    selector: `host-component`,
    template: `<app-subreddit-post [subreddit]="subreddit"></app-subreddit-post>`
  })
  class TestHostComponent {
    private subreddit: SubredditPost = {
      authorFullName: 't2_rw40v',
      author: 'Test author',
      subreddit: 'aww',
      title: 'Test title',
      hidden: false,
      downs: 0,
      name: 't3_dyqokn',
      ups: 76931,
      totalAwardsReceived: 10,
      mediaEmbed: null,
      thumbnailWidth: 140,
      secureMedia: null,
      thumbnail: 'https://b.thumbs.redditmedia.com/20rv62RDwQlVi9Za1ITi-7NZALD_ktSrc6LMWaoXWec.jpg',
      url: 'https://i.redd.it/olwzu31tipz31.jpg',
      isVideo: false,
      selftext: ''
    };
    setSubreddit(newInput: SubredditPost) {
      this.subreddit = newInput;
    }
  }
});
