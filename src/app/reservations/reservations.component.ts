import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
//  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark', scrollbarPosition: 'outside', contentTouchScroll: true };
  constructor(private fullPageService: MnFullpageService) { }

  ngOnInit() {
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(6, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

}
