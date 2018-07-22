import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  
})


export class PostsComponent implements OnInit {

  @Input() post: Post;
  
  posts: Post[];

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts); 
  }

    constructor(private postService: PostService){}

    ngOnInit() {
      this.getPosts();
     
    }
  
}
