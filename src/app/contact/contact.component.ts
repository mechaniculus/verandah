import { MnFullpageService } from 'ngx-fullpage';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  dateVal: any;
  @Input('currentIndex') currentIndex: number;
  @Output('currentIndexChange') currentIndexChange: EventEmitter<number> = new EventEmitter();
  // public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  constructor(private fullPageService: MnFullpageService) { }

  ngOnInit() {
  }

  onTabClick(index) {
    console.log('tab clicked', index);
    this.fullPageService.moveTo(9, index);
    this.currentIndex = index;
    this.currentIndexChange.emit(index);
  }

}
