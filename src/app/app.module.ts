import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenubarComponent } from './components/menubar/menubar.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { CtscansComponent } from './components/ctscans/ctscans.component';
import { MrisComponent } from './components/mris/mris.component';
import { MammosComponent } from './components/mammos/mammos.component';
import { UltrasoundsComponent } from './components/ultrasounds/ultrasounds.component';
import { XraysComponent } from './components/xrays/xrays.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    FooterComponent,
    CtscansComponent,
    MrisComponent,
    MammosComponent,
    UltrasoundsComponent,
    XraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
