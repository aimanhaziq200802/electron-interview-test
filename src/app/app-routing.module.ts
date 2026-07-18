import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthorizedGuard } from './core/services/guards/authorized-guard.service';
import { UnauthorizedGuard } from './core/services/guards/unauthorized-guard.service';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        canActivate: [UnauthorizedGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then((m) => m.AuthLayoutModule),
            },
        ],
    },
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthorizedGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./layouts/admin-layout/admin-layout.module').then((m) => m.AdminLayoutModule),
            },
        ],
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
