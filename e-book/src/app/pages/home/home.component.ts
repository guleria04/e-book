import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productImg: any; 
  languageFilter: string = ''; 
  constructor(private productServices: ProductService, private WishlistService: WishlistService) { }
  // this is get Product Image API
  ngOnInit(): void {
    this.fetchCardsFromApi();
  }
  fetchCardsFromApi() {
    this.productServices.getProducts().subscribe((data: any) => {
      this.productImg = data;
    });
  }
  // active class add and remove
  wishlistToggle(event: any) {
    const activeClass = event.srcElement.classList.contains('CardWishList');
    if (activeClass == true) {
      event.srcElement.classList.remove('CardWishList');
    } else {
      event.srcElement.classList.add('CardWishList');
    }
    // this is count length wishlist 
    const selectWishCount = document.querySelectorAll('.CardWishList').length;
    this.WishlistService.setWishlistCount(selectWishCount);
    this.WishlistService.getWishlistCount();
  }
// this filter language
 



}
