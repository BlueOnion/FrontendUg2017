import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})

export class Calc1Component implements OnInit {

  myForm: FormGroup;

  horizontal: AbstractControl;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      'horizontal': ['', Validators.compose(
        [Validators.required,
         Validators.minLength(1),
        this.myHorizontalValidator])],
      'vertical': ['', Validators.compose(
        [Validators.required,
         Validators.minLength(1),
        this.myHorizontalValidator])]
    });

    this.horizontal = this.myForm.controls['horizontal'];

    this.horizontal.valueChanges.subscribe(horizontal => console.log('First name set to ' + horizontal));
    this.myForm.controls['vertical'].valueChanges.subscribe(name => console.log('Last name set to ' + name));
  }

  ngOnInit() {
  }

  mySubmit(value: any) {
    console.log(value);
  }

  myHorizontalValidator(control: FormControl) {
    if (control.value.match(/^Bo/i)) {
      return {
        'bolekValue': true
      };
    }
  }

}
