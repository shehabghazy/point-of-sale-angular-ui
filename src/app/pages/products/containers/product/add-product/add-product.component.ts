import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.formGroup = this.fb.group({
      description: [''],
      name: [''],
      price: [0],
      barcode: [''],
      lowStock: [0],
      optimalStock: [0],
      stock: [0],
      stock_type: ['']
    });
  }

  ngOnInit(): void {
  }
  createItem(): void {
    console.log('create');
  }
  resetForm(): void {
    this.formGroup.reset();
  }
  back(): void {
    this.router.navigateByUrl('dashboard/products').then();
  }

}
