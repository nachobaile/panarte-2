import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: '**', redirectTo: 'home' },
    { path: 'login', component: LoginFormComponent},
    { path: 'signup', component: SignupComponent},
   ]

   