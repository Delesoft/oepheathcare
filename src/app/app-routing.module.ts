import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { CtscansComponent } from './components/ctscans/ctscans.component';
import { MrisComponent } from './components/mris/mris.component';
import { XraysComponent } from './components/xrays/xrays.component';
import { MammosComponent } from './components/mammos/mammos.component';
import { UltrasoundsComponent } from './components/ultrasounds/ultrasounds.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'products',component:ProductsComponent},
{path:'contacts',component:ContactComponent},
{path:'ctscans',component:CtscansComponent},
{path:'mris',component:MrisComponent},
{path:'xrays',component:XraysComponent},
{path:'mammos',component:MammosComponent},
{path:'ultrasounds',component:UltrasoundsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
