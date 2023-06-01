import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  submitted = false;
  valueValid:boolean = false;
  valueInalid: boolean = false;
  constructor(private http: HttpClient, private router:Router) {}

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });
  // user validation 
  get userFirstName() {
    return this.registerForm.get('firstName');
  }

  get userlastName() {
    return this.registerForm.get('lastName');
  }
  get userCity() {
    return this.registerForm.get('city');
  }

  get userEmail() {
    return this.registerForm.get('email');
  }
  get userPassword() {
    return this.registerForm.get('password');
  }

  get userConfPassword() {
    return this.registerForm.get('confirmPassword');
  }

  saveList(isValid: boolean) {
    if (isValid) {
      console.log(this.registerForm);
    }
  }
  // add register form 
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.http.post(environment.apiPath + 'user', this.registerForm.value).subscribe(res=>{
      this.valueValid = true;
    },err=>{
      this.valueInalid = true;
    })
  }

  signUp() {
    this.valueValid = !this.valueValid;
  }
  signUpInvalid() {
    this.valueInalid = !this.valueInalid;
  }
}
