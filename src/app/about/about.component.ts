import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AboutContentComponent } from '../about-content/about-content.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark', scrollbarPosition: 'outside', scrollButtons:{enable:true} };
  constructor(private route: Router) { }
  ngOnInit() {
  }

}
