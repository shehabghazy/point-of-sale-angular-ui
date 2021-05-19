import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Pagination} from '@core/models/pagination.model';
import {PageEvent} from '@angular/material/paginator';
import {Product} from '@core/models/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  @Input() dataSource: Product[] = [];
  @Input() displayedColumns: any;
  @Input() pagination: Pagination = {pageIndex: 0, pageSize: 10, total: 0};
  @Output() paginated = new EventEmitter<PageEvent>();

}
