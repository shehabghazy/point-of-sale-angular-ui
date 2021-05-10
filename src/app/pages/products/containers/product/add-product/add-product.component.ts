import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
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

}
