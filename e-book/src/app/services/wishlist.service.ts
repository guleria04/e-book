import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistCount: number = 0;

  constructor() { }

  setWishlistCount(count: number): void {
    this.wishlistCount = count;
  }

  getWishlistCount(): number {
    return this.wishlistCount;
  }
}
