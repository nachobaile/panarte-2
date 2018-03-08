import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { SessionService } from '../services/session.service';
import { ProductService } from '../services/product.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PanesComponent } from './panes/panes.component';
import { FilterPipe } from './filter.pipe';
import { PattyComponent } from './patty/patty.component';
import { CakesComponent } from './cakes/cakes.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from '../services/cart.service';
import { PromoComponent } from './promo/promo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    PanesComponent,
    FilterPipe,
    PattyComponent,
    CakesComponent,
    CartComponent,
    PromoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  providers: [SessionService,ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
