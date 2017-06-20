import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Microfilm } from '../shared/microfilm.interface';

@Component({
  moduleId: module.id,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public adminForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.adminForm = this._fb.group({
      roll_no: ['', [Validators.required, Validators.minLength(3)]],
      location: [''],
      newspapers: this._fb.array([
        this.initNewspaper() 
      ])
    })
  }

  initNewspaper() {
    // initialize newspaper
    return this._fb.group({
      name: [''], // name: ['', Validators.required],
      date_from: [''],
      date_to: ['']
    })
  }

  addNewspaper() {
        // add newspaper to the list
        const control = <FormArray>this.adminForm.controls['newspapers'];
        control.push(this.initNewspaper());
  }

  removeNewspaper(i: number){
        // remove newspaper from the list
        const control = <FormArray>this.adminForm.controls['newspapers'];
        control.removeAt(i);

  }

  save(model: Microfilm) {
    // call API to save customer
    console.log("model description: ");
    console.log(model);
  }

}
