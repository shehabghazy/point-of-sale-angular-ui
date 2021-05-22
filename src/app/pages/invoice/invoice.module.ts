import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';


const routes: Routes = [
  { path: '', component: InvoiceComponent },
  { path: 'create', component: CreateInvoiceComponent }
];


@NgModule({
  declarations: [
    InvoiceComponent,
    CreateInvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class InvoiceModule { }
