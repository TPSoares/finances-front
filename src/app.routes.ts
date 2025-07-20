import { AuthGuard } from '../authguard';
import { Routes } from '@angular/router';
import { Dashboard } from './app/components/dashboard/dashboard';
import { NotFound } from './app/components/not-found/not-found';
import { Login } from './app/components/login/login';

export const routes: Routes = [
  { path: '', component: Dashboard, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'not-found', component: NotFound },
  { path: '**', redirectTo: 'not-found' }
];
