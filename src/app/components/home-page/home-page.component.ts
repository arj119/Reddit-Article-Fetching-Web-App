import { Component, OnInit } from '@angular/core';
import { SubredditService } from "../../services/subreddit.service";
import {SubredditPost} from "../../DTOs/SubredditTopResponse";
import {Observable} from "rxjs";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  private posts: SubredditPost[] = [];
  subreddit: string = undefined;
  showNoPosts: boolean = false;

  constructor(
    public subredditService: SubredditService
  ) { }

  ngOnInit() {
  }

  getSearchResults($event: string) {
    this.subredditService.GetPosts($event).subscribe(res => {
      this.posts = res;
      this.showNoPosts = true;
    });
    this.subreddit = $event;
  }
}
