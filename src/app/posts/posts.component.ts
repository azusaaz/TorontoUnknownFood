import { Component, OnInit, Input } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


import { PostService } from '../post.service';
import { Post } from '../post';
import { POSTS } from '../mock-posts';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  
})


export class PostsComponent implements OnInit {

  loadAPI: Promise<any>;

  public buttonClicked() {
      this.loadAPI = new Promise((resolve) => {
          console.log('resolving promise...');
          this.loadScript();
      });
  }

  public loadScript() {
      console.log('preparing to load...')
      let node = document.createElement('script');
      node.src = 'http://www.instagram.com/embed.js';
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
  }
  // post: Post = {
  //   id: 1,
  //   data: 'pusateriee'
  // };

  // selectedPost: Post;

  posts: Post[];
//  isSelected(element, index, array){
//   return (element.id === this.post.id); 
//  }
// filter(this.isSelected)
  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts); 
  }



    @Input() post: Post;
  
    
  check(){
    if(this.post){
      
    }
      //     console.log("bbbbb");
      // if(document.getElementById("testScript")) 
      // document.getElementById("testScript").remove();
      // var testScript = document.createElement("script");
    
      // testScript.setAttribute("id", "testScript");
      // testScript.setAttribute("src", "http://www.instagram.com/embed.js");
      // document.body.appendChild(testScript);
  }
    constructor(private postService: PostService, private _scrollToService: ScrollToService) {

     }

     
     getScroll(): void {
      this._scrollToService.scrollTo;
    }

    ngOnInit() {
      this.getPosts();
     
    }
  

}
