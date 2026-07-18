import { LoginComponent } from 'src/app/features/authentication/pages/login/login.component';
import { Routes } from '@angular/router';

export const AUTH_LAYOUT_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    {
        path: 'login',
        children: [
            {
                path: '',
                component: LoginComponent,
            },
        ],
    },
];
