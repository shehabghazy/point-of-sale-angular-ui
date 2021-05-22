import { Component } from '@angular/core';
import { InvoiceService } from '@app/pages/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  constructor(private invoiceService: InvoiceService) {
  }

  all$ = this.invoiceService.all();

}
