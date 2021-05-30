import { Component } from '@angular/core';
import { CategoryService } from '@core/services/category.service';
import { ProductService } from '@core/services/product.service';
import { InvoicePageService, InvoiceProduct } from '@core/services/invoice-page.service';
import { fadeIn } from '@app/animations/fadeIn.animation';
import { ProductDetails } from '@core/models/product.model';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: [ './create-invoice.component.scss' ],
  animations: [ fadeIn ]
})
export class CreateInvoiceComponent {

  categories$ = this.categoryService.all();
  products$ = this.productService.filterProducts();

  vm$ = this.invoicePageService.state$;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private invoicePageService: InvoicePageService
  ) {}

  handleProductSearch(event: any): void {
    const query = event.target.value;
    console.log(query);
    this.products$ = this.productService.filterProducts(query);
  }

  setActiveCategory(categoryId: number): void {
    this.invoicePageService.setActiveCategory(categoryId);
    this.products$ = this.productService.filterProducts(undefined, categoryId);
  }

  addItem(product: ProductDetails, invoiceProducts: InvoiceProduct[]): void {
    const existingProduct = invoiceProducts.find(x => x.product.id === product.id);
    if (existingProduct) {
      if (existingProduct.product.stock.quantity <= existingProduct.count) {
        return;
      }
    }
    this.invoicePageService.addInvoiceProduct(product);
  }

  removeItem(productId: number): void {
    this.invoicePageService.removeInvoiceProduct(productId);
  }

  increaseItemQuantity(productId: number): void {
    this.invoicePageService.changeProductQuantity(productId, 'plus');
  }

  decreaseItemQuantity(productId: number): void {
    this.invoicePageService.changeProductQuantity(productId, 'minus');
  }

  createInvoice(): void {
    this.invoicePageService.createInvoice();
  }

  updateInvoice(): void {
    this.invoicePageService.updateInvoice();
  }

}
