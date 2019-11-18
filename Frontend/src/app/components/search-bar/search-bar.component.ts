import {Component, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from "@angular/core";
import { SubredditService } from "../../services/subreddit.service";
import {SubredditSearchResponse} from "../../DTOs/SubredditSearchResponse";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchTerm: EventEmitter<string> = new EventEmitter();

  results: SubredditSearchResponse[] = [];
  queryField: FormControl = new FormControl();
  showResults: boolean = true;
  constructor(
    public subredditService: SubredditService,
  ) { }

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(debounceTime(100))
      .subscribe( search => {
        this.showResults = true;
        if(search !== '') {
          this.subredditService.GetSubredditSearchResults(search).subscribe(res => {
            this.results = res
          });
        } else {
          this.results = [];
        }
      });
  }

  search(search : string) {
    this.searchTerm.emit(search);
    this.showResults = false;
  }
}
