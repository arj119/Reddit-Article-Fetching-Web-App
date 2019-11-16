import { Component, OnInit } from '@angular/core';
import { SubredditService } from "../../services/subreddit.service";
import {SubredditPost} from "../../DTOs/SubredditTopResponse";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private posts: Observable<SubredditPost[]>;

  test: SubredditPost = {
    authorFullName: 't2_4zsyk21d',
    subreddit: 'aww',
    title: 'It\'s me!',
    hidden: false,
    downs: 0,
    name: 't3_dwoux9',
    ups: 82364,
    totalAwardsReceived: 3,
    mediaEmbed: null,
    thumbnailWidth: 140,
    secureMedia: null,
    thumbnail: 'https://b.thumbs.redditmedia.com/BxT2-vUsPzRk9dNUI6GCAHGun6OKiD3TiDMhnRJPHDc.jpg',
    url: 'https://i.redd.it/drelqzs1tty31.jpg',
    isVideo: false
  };

  constructor(
    public subredditService: SubredditService
  ) { }

  ngOnInit() {
  }

  getSearchResults($event: string) {
    this.posts = this.subredditService.GetPosts($event);
  }
}
