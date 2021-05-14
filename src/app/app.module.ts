import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {CookieModule} from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import {AuthInterceptorProvider} from '@core/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [
    AuthInterceptorProvider
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
