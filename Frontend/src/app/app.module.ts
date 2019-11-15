import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SubredditPostComponent } from './components/subreddit-post/subreddit-post.component';
import { SearchBarComponent} from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SubredditService } from './services/subreddit.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomePageComponent,
    SubredditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SubredditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
