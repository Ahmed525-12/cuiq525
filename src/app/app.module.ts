import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { AccountComponent } from './pages/account/account.component';
import { ChekoutComponent } from './pages/chekout/chekout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductItemComponent } from './pages/home/product-item/product-item.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LiginComponent } from './pages/ligin/ligin.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ProductsComponent } from './pages/products/products.component';
import { FilterPipe } from './parent/shared/directives/pipes/filter.pipe';
import { SuccessComponent } from './success/success.component';
import { HiDirective } from './hi.directive';
import { WriteDirective } from './write.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    ChekoutComponent,
    HomeComponent,
    ProductItemComponent,
    LayoutComponent,
    LiginComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    FilterPipe,
    SuccessComponent,
    HiDirective,
    WriteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CommonModule,
    ReactiveFormsModule,

    HttpClientModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
