import { Component, OnInit } from '@angular/core';
import { fadeIn } from '@app/animations/fadeIn.animation';
import { PageEvent } from '@angular/material/paginator';
import { InvoiceService } from '@core/services/invoice.service';
import { UsersService } from '@core/services/users.service';
import { InvoiceFilter } from '@core/models/InvoiceFilter';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: [ './invoice.component.scss' ],
  animations: [ fadeIn ]
})
export class InvoiceComponent implements OnInit {

  constructor(
    private invoiceService: InvoiceService,
    private usersService: UsersService
  ) { }

  data$ = this.invoiceService.all(1, 20);
  users$ = this.usersService.users$;

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  handlePagination({ pageSize, pageIndex }: PageEvent): void {
    this.data$ = this.invoiceService.all(pageIndex + 1, pageSize);
  }

  handleFilter(filters: InvoiceFilter): void {
    this.data$ = this.invoiceService.all(1, 20, filters);
  }

}
