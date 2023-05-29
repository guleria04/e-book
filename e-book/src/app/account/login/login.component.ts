import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted=false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(12)]),
 
  })
  
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid){
        this.loginForm.markAllAsTouched();
        return;
  }
    console.log(this.loginForm.value);
  }

  get userEmail() 
  {
    return this.loginForm.get('email');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }

  get loginCheckBox() {
    return this.loginForm.get('checkbox');
  }

}
