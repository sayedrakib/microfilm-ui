import { Component } from '@angular/core';
import { Searchquery } from './searchquery.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public paperName;
  public dateFrom ;
  public dateTo;

  public searchquery : Searchquery;

search(formInputs) {
  var dates = formInputs.split(',');
  this.dateFrom = dates[0];
  this.dateTo= dates[1]; 

  console.log(this.paperName);
  console.log(this.dateFrom);
  console.log(this.dateTo);
}

submitForm(){
  //do nothing
  //console.log();
}

}
