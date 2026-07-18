import { ADMIN_LAYOUT_ROUTES } from './admin-layout.routing';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardModule } from 'src/app/features/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
    declarations: [AdminLayoutComponent],
    imports: [DashboardModule, RouterModule.forChild(ADMIN_LAYOUT_ROUTES), RouterOutlet],
    exports: [RouterModule],
})
export class AdminLayoutModule {}
