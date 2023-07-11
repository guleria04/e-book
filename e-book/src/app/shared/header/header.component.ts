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
  wishlistCountNumber:any;
  products: any;   
  searchBox:any = '';
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
      // this is show wishlist count number
    this.WishlistService.getWishCount().subscribe((data) =>{
      console.log(data);
      this.wishlistNumber = data;
    })
    });
   } 

 searchData() { 
    const searchTermLowerCase = this.searchBox.toLowerCase();
    this.filteredProducts = this.products.filter((product: any) => {
      // console.log(searchTermLowerCase)
      return product.name.toLowerCase().includes(searchTermLowerCase);
     
    });
  }
 }

 
