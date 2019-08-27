import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, EventEmitter, Output, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit, AfterViewChecked {
  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
  public dateVal: any;
  showNavigationIndicators = false;
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark', setHeight: '200px' };

  constructor(private fullPageService: MnFullpageService, private scrollService: MalihuScrollbarService) { }

  ngOnInit() {
  }
  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(8, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#events-scroller', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }
}
