import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import { SubredditService } from './subreddit.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SubredditPost} from "../DTOs/SubredditTopResponse";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubredditSearchResponse} from "../DTOs/SubredditSearchResponse";

describe('SubredditService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let subredditService: SubredditService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [SubredditService, HttpClient]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    subredditService = new SubredditService(<any> httpClientSpy);
  });

  it('should be initialized', inject([SubredditService], (subredditService: SubredditService) => {
    expect(subredditService).toBeTruthy();
  }));

  it('should return top posts (HttpClient called once)', () => {
    const expectedResponse: SubredditPost[] =
      [
        {
          authorFullName: "t2_rw40v",
          author: "LasagnaCena",
          subreddit: "aww",
          title: "My mom remembered I don't have room in my place for a Christmas tree, so she made me this wreath with built-in lights and all the ornaments from when I was a kid",
          hidden: false,
          downs: 0,
          name: "t3_dyqokn",
          ups: 76931,
          totalAwardsReceived: 10,
          mediaEmbed: null,
          thumbnailWidth: 140,
          secureMedia: null,
          thumbnail: "https://b.thumbs.redditmedia.com/20rv62RDwQlVi9Za1ITi-7NZALD_ktSrc6LMWaoXWec.jpg",
          url: "https://i.redd.it/olwzu31tipz31.jpg",
          isVideo: false,
          selftext: ""
        }
      ];

    httpClientSpy.get.and.returnValue( new Observable(subscriber => subscriber.next(expectedResponse)));

    subredditService.GetPosts('aww').subscribe(
      posts => expect(posts).toEqual(expectedResponse, 'expected posts'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return top posts (HttpClient called once)', () => {
    const expectedSearchResponse: SubredditSearchResponse[] =
      [
        {
          numSubscribers: 22483812,
          name: "aww",
          communityIcon: "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_vzx333xor7101.png",
          icon: "https://b.thumbs.redditmedia.com/aKWBgkEo7FnZ1d598QhzMrSZ-J1mVCk2H4kxOiikL8A.png"
        }
      ];

    httpClientSpy.get.and.returnValue( new Observable(subscriber => subscriber.next(expectedSearchResponse)));

    subredditService.GetSubredditSearchResults('aww').subscribe(
      results => expect(results).toEqual(expectedSearchResponse, 'expected results'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(new Observable(subscriber => subscriber.next(errorResponse)));

    subredditService.GetPosts('aww').subscribe(
      posts => fail('expected an error, not posts'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });

});
