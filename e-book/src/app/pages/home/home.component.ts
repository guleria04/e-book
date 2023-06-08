import { Component } from '@angular/core';  
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
  productImg:any;
  constructor(private productServices: ProductService){}

  ngOnInit() {
    this.productServices.getProducts().subscribe((data: any) => {
      this.productImg = data;
    })
  }
}
 
