import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
@Component({
  selector: 'app-atverandah',
  templateUrl: './atverandah.component.html',
  styleUrls: ['./atverandah.component.scss']
})
export class AtverandahComponent implements OnInit, AfterViewChecked {

  constructor(private scrollService: MalihuScrollbarService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#atverandah-scroller', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }

}
