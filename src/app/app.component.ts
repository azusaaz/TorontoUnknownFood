import { Component, OnInit} from '@angular/core';
import {enableProdMode} from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { PostService } from './post.service';

import { Post } from './post';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent implements  OnInit {

  title: string = 'Toronto Unknown Food';
  lat: number = 43.676930;
  lng: number = -79.389502;

  clickedMarker(id: number) {

    const config: ScrollToConfigOptions = {
      target: '#s'+id,
      duration: 650,
      easing: 'easeOutElastic',
      offset: 0
    };
    this.scrollToService.scrollTo(config);
  }

  posts: Post[];

  constructor(private postService: PostService, private  scrollToService: ScrollToService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts); 
  }

  // selectedPost: Post;

  // onSelect(post: Post): void{
  //   this.selectedPost = post;
  // }
}
