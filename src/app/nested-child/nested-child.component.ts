import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nested-child',
  templateUrl: './nested-child.component.html',
  styleUrls: ['./nested-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NestedChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}