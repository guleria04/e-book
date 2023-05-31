import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
import { environment } from 'src/environments/environment.development';
 

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  submitted = false;
  setValue: any; 
  display:boolean = false;
  isDisplay:boolean = false;
  constructor(private  http: HttpClient, private router:Router) { 
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12),
    ]),
  });

  get userEmail() {
    return this.loginForm.get('email');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }

  get loginCheckBox() {
    return this.loginForm.get('checkbox');
  }

  onSubmit() {
    // validation check
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
   
    // submit login on click
    this.http.get<any>(environment.userApi + 'user').subscribe(
      (res: any) => {
        const userCredential = res.find((result: any) => {
          return (
            result.email === this.loginForm.value.email &&
            result.password === this.loginForm.value.password
          );
        });

        if (userCredential) { 
          this.router.navigate(["/home"]);        
        } else { 
          this.display = true;
        }
      },
      (_err) => {
        alert('Something went wrong');
      }
    );
  }

  invalidClick() {
    this.display = !this.display;
  }
}
