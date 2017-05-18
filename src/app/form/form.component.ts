import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public paperName;
  public dateFrom ;
  public dateTo;

  constructor() { }

  ngOnInit() {
  }

  search(formInputs) {
    var dates = formInputs.split(',');
    this.paperName = dates[0];
    this.dateFrom = dates[1];
    this.dateTo = dates[2];

    console.log(this.paperName);
    console.log(this.dateFrom);
    console.log(this.dateTo);
  }

  submitForm() {
    //do nothing
    //console.log();
  }
}
