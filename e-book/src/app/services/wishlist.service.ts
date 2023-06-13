import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistCount: any;
  constructor() { }
  // this is add count wishlist 
  setWishlistCount(count: any): void {
    this.wishlistCount = count;
  }
  // this is show count wishlist 
  getWishlistCount(): any {
    this.wishlistCount;
    // console.log(this.wishlistCount)
    return this.wishlistCount;
  }
}
