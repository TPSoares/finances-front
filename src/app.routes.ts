import { AuthGuard } from '../authguard';
import { Routes } from '@angular/router';
import { Dashboard } from './app/components/dashboard/dashboard';
import { NotFound } from './app/components/not-found/not-found';
import { Login } from './app/components/login/login';
import { AppLayout } from './app/layout/component/app.layout';
import { Documentation } from './app/pages/documentation/documentation';
import { Transactions } from './app/components/transactions/transactions';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'transacoes', component: Transactions },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ],
        canActivate: [AuthGuard]
    },
    { path: 'login', component: Login },
    { path: 'not-found', component: NotFound },
    { path: '**', redirectTo: 'not-found' }
];
