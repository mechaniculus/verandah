import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit, AfterViewChecked {

  constructor(private scrollService: MalihuScrollbarService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#lunch-scroller', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }

}
