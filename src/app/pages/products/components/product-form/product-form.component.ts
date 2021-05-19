import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product, ProductDetails } from '@core/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: [ './product-form.component.scss' ]
})
export class ProductFormComponent implements OnInit {

  @Input() product?: ProductDetails;
  @Input() readonly = false;

  @Output() submitted = new EventEmitter<ProductDetails>();

  form = this.fb.group({
    name: [ '', Validators.required ],
    price: [ '', Validators.required ],
    barcode: [ '', Validators.required ],
    low_stock: [ '', Validators.required ],
    optimal_stock: [ '', Validators.required ],
    stock_type: [ '', Validators.required ],
    category_id: [ '', Validators.required ]
  });

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.form.patchValue(this.product);
    }
    if (this.readonly) {
      this.form.disable();
    }
  }

  handleSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.emit(this.form.value);
  }

}
