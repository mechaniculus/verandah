import { Component, OnInit, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-press-content',
  templateUrl: './press-content.component.html',
  styleUrls: ['./press-content.component.scss']
})


export class PressContentComponent implements OnInit, AfterViewChecked {
  constructor(private scrollService: MalihuScrollbarService) { }
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark', setHeight: '200px' };

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#press-content', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '65vh' });
    }
  }
}
