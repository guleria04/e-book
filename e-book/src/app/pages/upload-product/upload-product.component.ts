import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss']
})
export class UploadProductComponent {
  valueValid: boolean = false;
  valueInvalid:boolean = false;
  bookImageProduct: any =[];
  constructor(private productUpload:ProductService) {}
  uploadProduct: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      binding: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
  })
  onSubmit() { 
    this.productUpload.uploadProduct(this.uploadProduct.value).subscribe(
      (res) => {
        this.valueValid = true;
        this.bookImageProduct = res;
        console.log(res)
      },
      (err) => {
        this.valueInvalid = true;
      }
  )}
}

