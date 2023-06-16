import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  wishlistNumber: any; 
  products: any;   
  searchBox:any;
  filteredProducts:any;
  constructor(private WishlistService: WishlistService, private productServices: ProductService) { }
  // this function check wishlist length
  ngDoCheck() {
    this.wishlistNumber = this.WishlistService.getWishlistCount();
  }
  ngOnInit() {
    this.getProductData();
  }
  // this function for searching products 
  getProductData() {
    this.productServices.getProducts().subscribe((data: any) => {
      this.products = data;
      console.log(this.products)
    });
  } 

 searchData() {
  // const searchTermLowerCase = this.searchBox.toLowerCase();
  //  this.products.filter((product: any) => { 
  //   return product.name.toLowerCase().includes(searchTermLowerCase);
  // });
 }
}
 
