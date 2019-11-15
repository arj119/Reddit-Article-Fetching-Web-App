import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ComponentComponent } from './component/component/component.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { SubredditPostComponent } from './component/subreddit-post/subreddit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ComponentComponent,
    HomePageComponent,
    SubredditPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
