import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { ProductsComponent } from './products/products.component';
export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'products', component: ProductsComponent },
];
