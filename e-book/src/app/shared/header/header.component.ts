import { Component } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  wishlistNumber: any; 
  constructor(private WishlistService: WishlistService) {}
 
  ngDoCheck() {
    this.wishlistNumber = this.WishlistService.getWishlistCount();
   
  }
}
