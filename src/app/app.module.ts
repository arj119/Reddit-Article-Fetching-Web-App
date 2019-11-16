import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SubredditPostComponent } from './components/subreddit-post/subreddit-post.component';
import { SearchBarComponent} from './components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SubredditService } from './services/subreddit.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomePageComponent,
    SubredditPostComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SubredditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
