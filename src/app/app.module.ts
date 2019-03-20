import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { PostsComponent } from './posts/posts.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from '../environments/environment'


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
      apiKey: environment['apiKey']
    }),
        ScrollToModule.forRoot()
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
