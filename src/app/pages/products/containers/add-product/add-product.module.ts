import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AddProductComponent} from './add-product.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [ { path: '', component: AddProductComponent}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AddProductModule { }
