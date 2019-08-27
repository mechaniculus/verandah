import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-private-dining',
  templateUrl: './private-dining.component.html',
  styleUrls: ['./private-dining.component.scss']
})
export class PrivateDiningComponent implements OnInit {
  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
  public dateVal: any;
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  constructor(private fullPageService: MnFullpageService) { }

  ngOnInit() {
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(5, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

}
