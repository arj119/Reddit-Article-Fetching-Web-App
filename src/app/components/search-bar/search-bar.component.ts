import {Component, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchTerm: EventEmitter<string> = new EventEmitter();

  private results: string[] = [];
  private queryField: FormControl = new FormControl();
  private showResults: boolean = false;
  private resultsVisible: string[] = [];

  constructor() { }

  ngOnInit() {
    this.queryField.valueChanges
      .subscribe( search => {
        this.showResults = search !== '' && this.results.length > 0;
        console.log(search);
        // this.resultsVisible = this.results.filter(e => e.toLowerCase().includes(search));
      });
  }

  search(search : string) {
    this.searchTerm.emit(search);
  }
}
