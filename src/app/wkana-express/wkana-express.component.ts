import { Component, OnInit, EventEmitter, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-wkana-express',
  templateUrl: './wkana-express.component.html',
  styleUrls: ['./wkana-express.component.scss']
})


export class WkanaExpressComponent implements OnInit, AfterViewChecked {
  constructor(private scrollService: MalihuScrollbarService) { }
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark', setHeight: '200px' };

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#wkana-content', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }
}
