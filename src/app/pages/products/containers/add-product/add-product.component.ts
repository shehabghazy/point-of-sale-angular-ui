import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '@core/services/product.service';
import {Product} from '@core/models/product.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;
  selectedProduct = {};
  productId = -1;

  constructor(private fb: FormBuilder,
              private router: Router,
              private productsService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      barcode: [''],
      low_stock: ['', Validators.required],
      optimal_stock: ['', Validators.required],
      stock_type: [''],
      category_id: 1
    });
  }

  ngOnInit(): void {

    console.log(this.route.url);
    if (this.route.url.includes('edit')) {
      debugger;
      const urlSegments = this.route.url.split('/');
      console.log(urlSegments);
      this.productsService.loadProducts(undefined, undefined).pipe(take(1)).subscribe((products) => {
        this.selectedProduct = products.data.filter((p: { id: number; }) => p.id === +urlSegments[urlSegments.length - 1])[0];
        // console.log(products)
        //  console.log(this.selectedProduct);

        this.formGroup.patchValue(this.selectedProduct);
      });

    }
  }

  createItem(): void {
    if (this.route.url.includes('edit')) {
      this.productsService.updateProduct((this.selectedProduct as Product).id, this.formGroup.value)
        .pipe(take(1))
        .subscribe(console.log);
      this.router.navigateByUrl('home/products').then();
    } else {
      this.formGroup.get('stock_type')?.disable();
      this.productsService.createProduct(this.formGroup.value)
        .pipe(take(1))
        .subscribe(console.log);
      this.router.navigateByUrl('home/products').then();
    }

  }

  resetForm(): void {
    this.formGroup.reset();
  }

  back(): void {
    this.router.navigateByUrl('products').then();
  }

}
