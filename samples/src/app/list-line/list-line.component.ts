import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-line',
  templateUrl: './list-line.component.html',
  styleUrls: ['./list-line.component.scss']
})
export class ListLineComponent implements OnInit {

  public listModel: Array<any> = [
    { id: '3432482', value: 'Stage 1', isCurrent: false, completed: true },
    { id: '3456464', value: 'Stage 2', isCurrent: false, completed: true },
    { id: '5675755', value: 'Stage 3', isCurrent: true, completed: false },
    { id: '2342343', value: 'Stage 4', isCurrent: false, completed: false },
    { id: '7854544', value: 'Stage 5', isCurrent: false, completed: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
