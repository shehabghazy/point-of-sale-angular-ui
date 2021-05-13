import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersTableComponent} from './users-table.component';


@NgModule({
  declarations: [
    UsersTableComponent
  ],
  exports: [
    UsersTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersTableModule {
}
