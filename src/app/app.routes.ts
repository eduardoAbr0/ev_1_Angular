import { Routes } from '@angular/router';
import { Login } from '../components/login/login';
import { Registro } from '../components/registro/registro';
import { Landing } from '../components/landing/landing';
import { Header } from '../components/header/header';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'landing', component: Landing },
];
