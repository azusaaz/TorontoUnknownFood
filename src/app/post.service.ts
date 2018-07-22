import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Post } from './post';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  clickedMarker(id: number) {
    console.log(id)
  }

  getPosts(): Observable<Post[]>{
    return of(POSTS);
  }
  constructor() { }
}
