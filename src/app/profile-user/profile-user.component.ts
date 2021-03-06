import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required, forbiddenUsername(['cat', 'dog'])]],
      // tslint:disable-next-line: deprecation
      constraint: new FormGroup(
        {
          age: new FormControl(null, Validators.required),
          email: new FormControl(null, Validators.required),
        }, {
        validators: constraintEmailAndAge(15, '123@abc.com')
      }
      )
    });
  }
  // tslint:disable-next-line: typedef
  onSubmit() {
    console.log(this.form.controls.constraint.get('age').value);
  }
}
export type ValidationErrors = {
  [key: string]: any
};
// tslint:disable-next-line: typedef
export function forbiddenUsername(users = []) {
  return (c: AbstractControl) => {
    return (users.includes(c.value)) ? {
      invalidusername: true
    } : null;
  };
}
// tslint:disable-next-line: typedef
export function constraintEmailAndAge(age: number, email: string) {
  return (c: AbstractControl) => {
    return (c.value.age > age && c.value.email === email) ? null : {
      invalid: true
    };
  };
}



