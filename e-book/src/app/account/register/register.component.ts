import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
 
  submitted = false;
  constructor(private http: HttpClient) {
    console.log(environment.production)
  }

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

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.http.post(environment.userApi + 'user', this.registerForm.value).subscribe((data) => {
      console.log(data);
    });
  }
  
}
