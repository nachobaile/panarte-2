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


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    PanesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    
  ],
  providers: [SessionService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
