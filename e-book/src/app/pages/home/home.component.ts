import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  productImg: any;    
  constructor(private productServices: ProductService) {}
  // this is get Product Image API
  ngOnInit() {
    this.fetchCardsFromApi();
  }
  
  fetchCardsFromApi() {
    this.productServices.getProducts().subscribe((data: any) => {
      this.productImg = data;
    });
  }

  // active class
  wishlistToggle(event:any){
    const activeClass = event.srcElement.classList.contains('CardWishList');
    if (activeClass == true){
      event.srcElement.classList.remove('CardWishList');
    }else {
      event.srcElement.classList.add('CardWishList');
    }
    let activeLength = document.querySelectorAll('.CardWishList')
    console.log((activeLength).length)
  }
  }
 