import {Component, OnInit} from '@angular/core';
import { SubredditService } from '../../services/subreddit.service';
import {SubredditPost, SubredditTopResponse} from '../../DTOs/SubredditTopResponse';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

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

  posts: SubredditPost[] = [this.test];

  constructor(
    public subredditService: SubredditService
  ) {}

  ngOnInit() {
    this.subredditService.GetPosts('aww').subscribe(res => {
      console.log(res);

      if (res != null) {
          this.posts = res;
        }
      }
    );
  }

  private displayPosts() {
  }
}
