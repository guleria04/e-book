import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  data: any;
  constructor(private productServices: ProductService, private WishlistService: WishlistService) { }
  productImg: any;  
  wishlistCount: any;
  // this is filter for language
  searchLanguage: string = 'all';
  searchBinding: string = 'all';
  searchPrice: any = 'all';
   
  // this is get Product Image from API
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
      this.WishlistService.addWishlist(this.WishlistService).subscribe(
        (res) =>  {  
          
      })
        }
    // this is count length wishlist 
    const selectWishCount = document.querySelectorAll('.CardWishList').length;
    this.WishlistService.setWishlistCount(selectWishCount);
    this.WishlistService.getWishlistCount();
  } 
 
}
