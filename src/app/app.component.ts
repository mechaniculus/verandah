import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MnFullpageService } from 'ngx-fullpage';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {
  title = 'VERANDAH';
  currentIndex = -1;
  showHeader = true;
  fullpageServiceDestroyed = false;
  constructor(private router: Router, public fullpageService: MnFullpageService) {

  }


  ngAfterViewInit() {
    console.log('window innerWidth :', window.innerWidth);
    if (window.innerWidth < 991.98) {
      this.fullpageServiceDestroyed = true;
      this.fullpageService.destroy('all');
    }
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullpageService.moveTo(3, index);
    this.currentIndex = index;
  }

  moveRight(maxCount): boolean {
    if (this.currentIndex < maxCount) {
      this.currentIndex++;
      this.fullpageService.moveSlideRight();
      return false;
    } else {
      this.currentIndex = 0;
      return true;
    }
  }

  moveLeft(maxCount): boolean {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.fullpageService.moveSlideLeft();
      return false;
    } else {
      this.currentIndex = maxCount;
      return true;
    }
  }

  onLeaveHandler = (index: number, nextIndex: number, direction: string) => {
    console.log('on leave handler, service ', this.fullpageServiceDestroyed);
    if (this.fullpageServiceDestroyed) {
      return;
    }

    if (Math.abs(index['index'] - nextIndex['index']) !== 1) {
      return true;
    }

    console.log('moving from ', index['index'], nextIndex['index']);
    console.log('APP COMP: current slide ', this.currentIndex);
    if (direction === 'down') {


      // Landing Page
      if (index['index'] === 0) {
        this.showHeader = false;
      }

      // About Page
      if (index['index'] === 1 && nextIndex['index'] === 2) {
        this.currentIndex = 0; return true;
      }

      // About Founder Page
      if (index['index'] === 2 && nextIndex['index'] === 3) {
        this.currentIndex = 0; return true;
      }


      // Menu Page
      if (index['index'] === 3) return this.moveRight(8);
      if (index['index'] === 3 && nextIndex['index'] === 4) {
        this.currentIndex = 0; return true;
      }

      // Events Page
      if (index['index'] === 4) return this.moveRight(2);

      if (index['index'] === 4 && nextIndex['index'] === 5) {
        this.currentIndex = 0; return true;
      }

       // Media Page
       if (index['index'] === 5) return this.moveRight(2);

       if (index['index'] === 5 && nextIndex['index'] === 6) {
         this.currentIndex = 0; return true;
       }

      // Contact Page
      if (index['index'] === 6) return this.moveRight(1);
    } else {
      if (index['index'] === 6) return this.moveLeft(2);
      if (index['index'] === 6 && nextIndex['index'] === 5) {
        this.currentIndex = 2; return true;
      }

      // Media Page
      if (index['index'] === 5) return this.moveLeft(2);
      if (index['index'] === 5 && nextIndex['index'] === 3) {
        this.currentIndex = 6; return true;
      }

      // Events Page
      if (index['index'] === 4) return this.moveLeft(8);
      if (index['index'] === 4 && nextIndex['index'] === 3) {
        this.currentIndex = 5; return true;
      }

      // Lunch Dinner & Wine Page
      if (index['index'] === 3) return this.moveLeft(0);
      if (index['index'] === 4 && nextIndex['index'] === 3) {
        this.currentIndex = 0; return true;
      }

      // About Founder Page
      if (index['index'] === 2 && nextIndex['index'] === 1) {
        this.currentIndex = 0; return true;
      }

      // About Page
      if (index['index'] === 1) {
        this.showHeader = true;
      }
    }
    return true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onMoveToIndex(index) {
    this.fullpageService.moveTo(index);
  }
}
