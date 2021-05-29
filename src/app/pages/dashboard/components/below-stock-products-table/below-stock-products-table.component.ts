import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-below-stock-products-table',
  templateUrl: './below-stock-products-table.component.html',
  styleUrls: [ './below-stock-products-table.component.scss' ]
})
export class BelowStockProductsTableComponent implements OnInit {

  @Input() dataSource: { id: number; name: string; minimumStock: number; stock: number; }[] = [];

  displayedColumns = [ 'name', 'minimumStock', 'stock', 'button' ];


  constructor() {
  }

  ngOnInit(): void {
  }


  getColor(stock: number, minimumStock: number): string {
    const limit = minimumStock * 0.2;
    if (minimumStock - stock <= limit) {
      return '#F7C600';
    } else {
      return 'red';
    }
  }
}
