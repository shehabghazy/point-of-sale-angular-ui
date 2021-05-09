import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUsersComponent } from './containers/manage-users/manage-users.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', component: ManageUsersComponent}];
@NgModule({
  declarations: [
    ManageUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageUsersModule { }
