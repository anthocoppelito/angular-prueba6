import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'products/:productId', component: ProductDetailComponent},
    // {path: 'products/:category/:productId', component: ProductDetailComponent},
    {path: 'contact',component: ContactComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
