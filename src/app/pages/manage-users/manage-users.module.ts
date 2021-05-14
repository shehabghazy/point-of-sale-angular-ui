import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageUsersComponent} from './containers/manage-users/manage-users.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersTableComponent} from '@app/pages/manage-users/components/users-table/users-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AddUserComponent} from './containers/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {EditUserComponent} from '@app/pages/manage-users/containers/edit-user/edit-user.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { UserDetailsComponent } from './containers/user-details/user-details.component';


const routes: Routes = [
  {
    path: '',
    component: ManageUsersComponent
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'edit/:id',
    component: EditUserComponent
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  }
];

@NgModule({
  declarations: [
    ManageUsersComponent,
    UsersTableComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class ManageUsersModule {
}
