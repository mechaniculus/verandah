import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
 // public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', scrollbarPosition: 'outside', contentTouchScroll: true };
  constructor(private fullPageService: MnFullpageService) { }

  ngOnInit() {
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(7, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

}
