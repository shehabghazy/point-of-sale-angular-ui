import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '@core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private productsService: ProductService) {
    this.formGroup = this.fb.group({
      description: [''],
      name: ['', Validators.required],
      price: [null, Validators.required],
      barcode: [''],
      lowStock: [null, Validators.required],
      optimalStock: [null, Validators.required],
      stock: [null, Validators.required],
      stock_type: ['']
    });
  }

  ngOnInit(): void {
    this.productsService.getProductsss().subscribe(console.log);
  }

  createItem(): void {
    console.log('create');
  }

  resetForm(): void {
    this.formGroup.reset();
  }

  back(): void {
    this.router.navigateByUrl('home/products').then();
  }

}
