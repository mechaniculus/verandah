import { Component, OnInit, OnDestroy } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.scss']
})
export class MobileViewComponent implements OnInit, OnDestroy {
  public dateVal: any;
  constructor(private mScrollbarService: MalihuScrollbarService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.mScrollbarService.destroy('#founder');
  }

}
