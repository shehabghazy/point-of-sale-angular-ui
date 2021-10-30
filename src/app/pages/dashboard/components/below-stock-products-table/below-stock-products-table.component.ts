import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LowStockProduct } from '@core/models/DashboardResponse';

@Component({
  selector: 'app-below-stock-products-table',
  templateUrl: './below-stock-products-table.component.html',
  styleUrls: ['./below-stock-products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BelowStockProductsTableComponent {
  @Input() dataSource: LowStockProduct[] = [];

  displayedColumns = ['name', 'minimumStock', 'stock', 'button'];

  getColor(stock: number, minimumStock: number): string {
    const limit = minimumStock * 0.2;
    if (minimumStock - stock <= limit) {
      return '#F7C600';
    } else {
      return 'red';
    }
  }
}
