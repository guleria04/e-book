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
    confirmPassword:  new FormControl('',Validators.required),
  
} 

) 
submitted = false;
  
  
  onSubmit() { 
        console.log(this.registerForm.value);

        this.submitted = true;
        if (this.registerForm.invalid) {
          return;
      }
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

  get userConfPassword() {
    return this.registerForm.get('confirmPassword');
  }

  // MustMatch(password:any, confirmPassword:any) {
  //     const passwordControl = FormGroup.controls[password];
  //     const confirmPasswordControl = FormGroup.controls[confirmPassword];

  //     if (confirmPasswordControl.error && !confirmPasswordControl.error['MustMatch']){
  //       return
  //     }
  //     if (passwordControl.value !== confirmPasswordControl.value){
  //       confirmPasswordControl.setError({MustMatch:true})
  //     }else {
  //       confirmPasswordControl.setError(null);
  //     }
  //  }
  
   

  saveList(isValid: boolean) {
    if (isValid) {
      console.log(this.registerForm)
    }

  }
 

}
 