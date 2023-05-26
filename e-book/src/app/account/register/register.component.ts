import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    confirmPassword: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
  });
  
  onSubmit() { 
        console.log(this.registerForm.value);
  }

  get userFirstName() 
  {
    return this.registerForm.get('firstName');
  }

  get  userlastName() 
  {
    return this.registerForm.get('lastName');
  }
  get userCity() {
    return this.registerForm.get('city');
  }

  get userEmail() 
  {
    return this.registerForm.get('email');
  }
  get userPassword() {
    return this.registerForm.get('password');
  }
  
}
 