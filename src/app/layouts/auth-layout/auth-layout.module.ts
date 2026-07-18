import { AUTH_LAYOUT_ROUTES } from './auth-layout.routing';
import { AuthenticationModule } from 'src/app/features/authentication/authentication.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
    declarations: [AuthLayoutComponent],
    imports: [AuthenticationModule, RouterModule.forChild(AUTH_LAYOUT_ROUTES), RouterOutlet],
    exports: [RouterModule],
})
export class AuthLayoutModule {}
