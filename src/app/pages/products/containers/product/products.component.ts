import {Component, OnInit} from '@angular/core';
import {products, ProductService} from '../../../../core/services/product.service';
import {DataSource} from '@angular/cdk/collections';
import {Product} from '../../../../core/models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'lowStock', 'optimalStock', 'stock', 'stock_type', 'barcode'];
  dataSource: any;

  constructor(private productsService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = products;
    // this.productsService.getProducts();
  }

  onClickedRow(): void {
    console.log('hello');
  }
  addItem(): void {
    this.router.navigateByUrl('dashboard/products/add');
  }
}
