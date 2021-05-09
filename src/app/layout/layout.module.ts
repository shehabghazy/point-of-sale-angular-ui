import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EmptyLayoutComponent} from './containers/empty-layout/empty-layout.component';
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {DirectivesModule} from '../core/directives/directives.module';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    EmptyLayoutComponent,
    MainLayoutComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    DirectivesModule,
    MatMenuModule
  ]
})
export class LayoutModule { }
