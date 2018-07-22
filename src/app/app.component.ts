import { Component, OnInit} from '@angular/core';
// import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
// import {enableProdMode} from '@angular/core';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { PostService } from './post.service';
import { Post } from './post';
import { POSTS } from './mock-posts';
// enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})



export class AppComponent implements  OnInit {

  
  title: string = 'Toronot Unknown Food';
  lat: number = 43.676930;
  lng: number = -79.389502;


  clickedMarker(id: number) {
    console.log( id)
    const config: ScrollToConfigOptions = {

      target: '#s'+id,
      duration: 650,
      easing: 'easeOutElastic',
      offset: 0
    };
    this.scrollToService.scrollTo(config);
  }

  selectedPost: Post;

  posts: Post[];

  constructor(private postService: PostService, private  scrollToService: ScrollToService) { }

  ngOnInit() {
    this.getPosts();
  }

  onSelect(post: Post): void{
    this.selectedPost = post;
    
  }
  
  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts); 
  }





}
