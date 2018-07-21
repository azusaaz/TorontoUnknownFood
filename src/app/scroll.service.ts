import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private _scrollToService: ScrollToService) { }
 
  public triggerScrollTo(id) {
    
 
    const config: ScrollToConfigOptions = {
      container: 'wrapper',
      target: '#'+id,
      duration: 650,
      easing: 'easeOutElastic',
      offset: 20
    };
 
    this._scrollToService.scrollTo(config);
  }
}
