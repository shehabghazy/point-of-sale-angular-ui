import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { NonAuthGuard } from '@core/guards/non-auth.guard';
import { RoleGuard } from '@core/guards/role.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    // canActivate: [NonAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.routes').then(m => m.routes),
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'products',
        canActivate: [RoleGuard],
        data: {},
        loadChildren: () =>
          import('./pages/products/products.module').then(
            m => m.ProductsModule
          ),
      },
      {
        path: 'manage-users',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./pages/manage-users/manage-users.module').then(
            m => m.ManageUsersModule
          ),
      },
      {
        path: 'profile',
        loadComponent: async () =>
          (await import('./pages/profile/profile.component')).ProfileComponent,
      },
      {
        path: 'shifts',
        loadComponent: async () =>
          (await import('./pages/shifts/shifts.component')).ShiftsComponent,
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            m => m.CategoriesModule
          ),
      },
      {
        path: 'invoice',
        loadChildren: () =>
          import('./pages/invoice/invoice.module').then(m => m.InvoiceModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
      },
      {
        path: 'supplies',
        loadChildren: () =>
          import('./pages/supplies/supplies.module').then(
            m => m.SuppliesModule
          ),
      },
    ],
  },
];