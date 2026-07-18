import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { StorageService } from '../storage.service';

@Injectable({
    providedIn: 'root',
})
export class UnauthorizedGuard {
    constructor(
        private router: Router,
        private storageService: StorageService,
    ) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isUnauthorized = !this.storageService.accessToken;

        if (!isUnauthorized) {
            this.router.navigateByUrl('/dashboard');
        }

        return isUnauthorized;
    }
}
