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
    const cardElement = event.srcElement;
    const activeClass = cardElement.classList.contains('CardWishList');
  
    if (activeClass) {
      cardElement.classList.remove('CardWishList');
    } else {
      cardElement.classList.add('CardWishList');
      const selectWishCount = document.querySelectorAll('.CardWishList').length;
      this.WishlistService.setWishlistCount(selectWishCount);
  
      // Create the wishlist data to send to the API
      const wishlistData = {
        wishlistCount: selectWishCount,
      };
  
      this.WishlistService.addWishlist(wishlistData).subscribe(
        (res) => {
          // Handle the API response here
          console.log(res);
          this.WishlistService.getWishlistCount();
        },
        (error) => {
          // Handle the API error here
          console.error(error);
        }
      );
    }
  }
  
 
}
