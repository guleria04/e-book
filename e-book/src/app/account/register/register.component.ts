import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  submitted = false;
  valueValid: boolean = false;
  valueInvalid: boolean = false;
  fieldTextType: boolean = false;
  fieldTextTypePassword: boolean = false;
  fieldTextTypeConfirmPassword: boolean = false;
  constructor(private authServices: AuthService, private router: Router) {}

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

  get userLastName() {
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
    this.authServices.signUp(this.registerForm.value).subscribe(
      (res) => {
        this.valueValid = true;
      },
      (err) => {
        this.valueInvalid = true;
      }
    );
  }

  signUp() {
    this.valueValid = !this.valueValid;
  }
  // this is signUp invalided
  signUpInvalid() {
    this.valueInvalid = !this.valueInvalid;
  }
  // this is show password
  showPassword() {
    this.fieldTextTypePassword = !this.fieldTextTypePassword;
  }
  // this is show confirm password
  showConfirmPassword() {
    this.fieldTextTypeConfirmPassword = !this.fieldTextTypeConfirmPassword;
  }
}
