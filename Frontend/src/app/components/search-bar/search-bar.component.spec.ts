import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './search-bar.component';
import {of} from "rxjs";
import {query} from "@angular/animations";
import {by} from "protractor";

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show search results as typed into input bar', () => {
    expect(fixture.nativeElement.querySelector(by.id('keyword')).sendKeys('a'));
    expect(fixture.nativeElement.querySelector(by.id('keyword')).sendKeys('w'));
    expect(fixture.nativeElement.querySelector(by.id('keyword')).sendKeys('w'));
  });

  it('should trigger event emitter when search term is clicked', () => {
    expect(fixture.nativeElement.querySelector(by.id('keyword')).sendKeys('aww'));
    let searchTerm: string;
    component.searchTerm.subscribe(search => searchTerm = search);
  });

  it('should trigger event emitter when search term is clicked', () => {
    expect(fixture.nativeElement.querySelector(by.id('keyword')).sendKeys('aww'));
    let searchTerm: string;
    component.searchTerm.subscribe(search => searchTerm = search);
  });


});
