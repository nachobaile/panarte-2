import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductsComponent } from './products/products.component';
import { PattyComponent} from './patty/patty.component';
import { PanesComponent} from './panes/panes.component';
import { CakesComponent} from './cakes/cakes.component';
import { CartComponent} from './cart/cart.component';
import { PromoComponent } from './promo/promo.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'login', component: LoginFormComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'products/pattys', component: PattyComponent},
    { path: 'products/breads', component: PanesComponent},
    { path: 'products/cakes', component: CakesComponent},
    { path: 'cart', component: CartComponent},
    { path: 'promo', component: PromoComponent},
    { path: '**', redirectTo: 'home' },
    { path: 'success', component: SuccessComponent},
   ]

   