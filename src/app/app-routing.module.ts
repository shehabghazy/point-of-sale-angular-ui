import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyLayoutComponent} from './layout/containers/empty-layout/empty-layout.component';
import {MainLayoutComponent} from './layout/containers/main-layout/main-layout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {NonAuthGuard} from './core/guards/non-auth.guard';
import {RoleGuard} from './core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '', component: EmptyLayoutComponent, canActivate: [NonAuthGuard], children: [
      {
        path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  },
  {
    path: 'dashboard', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {
        path: 'manage-users',
        canActivate: [RoleGuard],
        data: {roles: ['admin']},
        loadChildren: () => import('./pages/manage-users/manage-users.module').then(m => m.ManageUsersModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
