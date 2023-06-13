import { Component } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  addwishlistCount: any;
  constructor(private wishList:WishlistService){}
  ngOnInit() {
    this.addwishlistCount = this.wishList.getWishlistCount();
    console.log(this.addwishlistCount);
  }
}
