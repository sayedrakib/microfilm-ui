import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/index';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

   @Input() searchResults: Array<Item>;

  ngOnInit() {
  }

}
