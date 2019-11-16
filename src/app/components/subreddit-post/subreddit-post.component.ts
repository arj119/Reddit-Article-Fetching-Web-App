import {Component, Input, OnInit} from '@angular/core';
import {SubredditPost} from "../../DTOs/SubredditTopResponse";
import {SubredditService} from "../../services/subreddit.service";

@Component({
  selector: 'app-subreddit-post',
  templateUrl: './subreddit-post.component.html',
  styleUrls: ['./subreddit-post.component.scss']
})
export class SubredditPostComponent implements OnInit {

  @Input() subreddit: SubredditPost;

  constructor() { }
  ngOnInit() {}

}


