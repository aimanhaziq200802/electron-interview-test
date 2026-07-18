import { DashboardComponent } from 'src/app/features/dashboard/pages/dashboard.component';
import { Routes } from '@angular/router';

export const ADMIN_LAYOUT_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
        ],
    },
];
