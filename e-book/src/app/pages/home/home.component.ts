import { Component } from '@angular/core'; 
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  table:any;
  classToggled = false; 
  userData: any =[];
  constructor(private authServices: AuthService,) {}
  ngOnInit() { 
    this.authServices.signIn().subscribe((data =>{
      console.log(data)
      this.userData=data;
      if(data === true) {
        this.table.append('<tr><td></td></tr>');
      }
    }))
    
  }
  // svg color
  svgIcon() {
   this.classToggled = !this.classToggled;
  }

  
}
