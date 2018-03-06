import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: '**', redirectTo: 'home' },
    { path: 'login', component: LoginFormComponent},
    { path: 'products', component: ProductsComponent},
   ]

   