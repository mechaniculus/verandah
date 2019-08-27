import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
@Component({
  selector: 'app-chef-tasting',
  templateUrl: './chef-tasting.component.html',
  styleUrls: ['./chef-tasting.component.scss']
})
export class ChefTastingComponent implements OnInit, AfterViewChecked {

  constructor(private scrollService: MalihuScrollbarService) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (window.innerWidth >= 991.98) {
      // tslint:disable-next-line:max-line-length
      this.scrollService.initScrollbar('#chef-scroller', { axis: 'yx', theme: 'minimal-dark', scrollButtons: { enable: true }, setHeight: '60vh' });
    }
  }

}
