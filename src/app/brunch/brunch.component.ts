import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brunch',
  templateUrl: './brunch.component.html',
  styleUrls: ['./brunch.component.scss']
})
export class BrunchComponent implements OnInit {
public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };
  constructor() { }

  ngOnInit() {
  }

}
