import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {LoginComponent} from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '', component: AuthLayoutComponent, children: [
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatCardModule
  ]
})
export class AuthModule {
}
