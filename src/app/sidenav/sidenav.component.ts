import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import * as $ from 'jquery';
import { MnFullpageService } from 'ngx-fullpage';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  public selectedItem: number;
  @Input() currentIndex: number;
  @Input() showHeader: boolean;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
  @Output('moveToIndex') moveToIndex: EventEmitter<number> = new EventEmitter();

  constructor(public fullpageService: MnFullpageService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    $('.toggle-menu').click(function () {
      $(this).toggleClass('active');
      $('#menu').toggleClass('open');
    });
  }

  routeTo(index, slide, id) {
    if (window.innerWidth < 991.98) {
      $('.toggle-menu').toggleClass('active');
      console.log('ID:', id);
      let epos = $('#' + id).offset().top;
      let winPos = $(window).scrollTop();
      console.log('element pos from top: ', winPos - epos, epos);
      $('html,body').animate({
        scrollTop: epos
      }, 'slow'
      );

      // alert($('#' + id).scrollTop());
    } else {
      console.log("fullpage service", index, slide, this.fullpageService);

      //this.fullpageService.moveTo(index, slide);
      this.moveToIndex.emit(index);
      this.currentIndex = slide;
      this.currentIndexChange.emit(slide);
      $('.toggle-menu').toggleClass('active');
    }
  }
}
