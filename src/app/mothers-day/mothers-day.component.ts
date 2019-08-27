import { Component, OnInit, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-mothers-day',
  templateUrl: './mothers-day.component.html',
  styleUrls: ['./mothers-day.component.scss']
})
export class MothersDayComponent implements OnInit, AfterViewChecked {
  constructor(private scrollService: MalihuScrollbarService) { }
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark', setHeight: '200px' };
  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#mother-scroller', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }
}
