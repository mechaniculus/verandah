import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  showNavigationIndicators = false;

  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  constructor(private fullPageService: MnFullpageService) { }

  ngOnInit() {
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(4, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

}
