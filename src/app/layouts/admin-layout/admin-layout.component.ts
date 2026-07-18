import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
    constructor(
        private router: Router,
        private storageService: StorageService,
    ) {}

    logout(): void {
        const confirmLogout = confirm('Are you sure you want to sign out?');

        if (!confirmLogout) {
            return;
        }

        this.storageService.logout('accessToken');
        this.router.navigateByUrl('/login');
    }
}
