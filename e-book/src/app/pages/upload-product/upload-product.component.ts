import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss'],
})
export class UploadProductComponent {
  valueValid: boolean = false;
  valueInvalid: boolean = false;
  bookImageProduct: any = [];
  fileName: string = '';
  submitted= false;
  constructor(private productUpload: ProductService) { }
  uploadProduct: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    binding: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required), 
    image: new FormControl('', Validators.required), 
  });
  get authorName() {
    return this.uploadProduct.get('name');
  }
  get productAuthor() {
    return this.uploadProduct.get('author');
  }
  get productBinding() {
    return this.uploadProduct.get('binding');
  }
  get productLanguage() {
    return this.uploadProduct.get('language');
  }
  get productPrice() {
    return this.uploadProduct.get('price');
  }
  get uploadImage() {
    return this.uploadProduct.get('image')
  }
 
  onSelectFile(event: any) {
    const input = event.target;
    this.fileName = input.files[0].name;
  }
  uploadFile() {
    this.valueValid = !this.valueValid;
  }
  uploadInValidFile() {
    this.valueInvalid = !this.valueInvalid;
  }
  onUpload() {
    this.submitted = true;
    if (this.uploadProduct.invalid) {
      this.uploadProduct.markAllAsTouched();
      return;
    }
    this.productUpload.uploadProduct(this.uploadProduct.value).subscribe(
      (res) => {
        this.valueValid = true;
        this.bookImageProduct = res;
        console.log(res);
      },
      (err) => {
        this.valueInvalid = true;
      }
    );
  }
}
 
