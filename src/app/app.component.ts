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

  lat: number = 43.676930;
  lng: number = -79.389502;
 
  //// infowindow auto close////
  lastSelectedInfoWindow: any;
  markerClicked(id: number, infoWindow: any) {

    const config: ScrollToConfigOptions = {
      target: '#s'+id,
      duration: 650,
      easing: 'easeOutElastic',
      offset: 0
    };
    this.scrollToService.scrollTo(config);

    if (infoWindow == this.lastSelectedInfoWindow) {
      return;
    }
    if (this.lastSelectedInfoWindow != null) {
    try{
        this.lastSelectedInfoWindow.close();
      } catch {} 
    }
    this.lastSelectedInfoWindow = infoWindow;
    
    }

  ////tag and genre filter///
  filtering(){
  //   if(event.target.value=="allTags"){
  //     var taglist;
  //     taglist = document.getElementsByClassName("tag");
  //     for (var ii = 0; ii < taglist.length; ii++) {
  //       taglist[ii].setAttribute("checked","true");
  //       return;
  //   }

  // }
  //   else if(event.target.value=="allGenres"){

  // }
  //   else{ 
  //     document.getElementById("allTags").setAttribute("checked", "false"); 
  // }
 
    //reset conditions
    this.getPosts();
    var filteredPosts=[];
    var conditionTags;
    var conditionGenres;

    //make tag list
      conditionTags = [].slice.call(document.getElementsByClassName("tag"));
      conditionTags = conditionTags.filter(function(item){
              return item.checked == true;
      });
   
    //make ganre lest
      conditionGenres = [].slice.call(document.getElementsByClassName("genre"));
      conditionGenres = conditionGenres.filter(function(item){
              return item.checked == false;
      });

    //tag check
    for(var jj=0; jj< this.posts.length; jj++){
        for(var ii=0; ii< conditionTags.length; ii++){
          if(this.posts[jj].data.toLowerCase().includes(conditionTags[ii].value)){
            filteredPosts.push(this.posts[jj]);  
            
            break; //go to next post check
            }
        }
      };

    //genre check
    for(var ii=0; ii< conditionGenres.length; ii++){
        for(var jj=0; jj< filteredPosts.length; jj++){
            if(filteredPosts[jj].genre.toLowerCase().includes(conditionGenres[ii].value)){
              filteredPosts.splice(jj,1);
            }
        }
      };
  this.posts = filteredPosts;
};

  posts: Post[];
 
  constructor(private postService: PostService, private  scrollToService: ScrollToService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts); 
  }
}