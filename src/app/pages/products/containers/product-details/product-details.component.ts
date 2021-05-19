import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId = 0;
  constructor(private route: Router) { }

  ngOnInit(): void {
    const urlSegments = this.route.url.split('/');
    this.productId = +urlSegments[urlSegments.length - 1 ];
  }

}
