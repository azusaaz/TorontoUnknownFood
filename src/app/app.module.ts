import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { PostsComponent } from './posts/posts.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwoA3Rqcu2tu2ch0mh2tTzyl4yjhA5pbA'
    }),
        AppRoutingModule,
        ScrollToModule.forRoot()
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
