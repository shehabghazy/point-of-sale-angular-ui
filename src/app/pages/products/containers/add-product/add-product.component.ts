import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { ProductDetails } from '@core/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: [ './add-product.component.scss' ]
})
export class AddProductComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productsService: ProductService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  handleAdd(product: ProductDetails): void {
    // this.productsService.addProduct()
  }

}
