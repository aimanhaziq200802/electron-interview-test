import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { StorageService } from '../storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizedGuard {
    constructor(
        private router: Router,
        private storageService: StorageService,
    ) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const isAuthorized = !!this.storageService.accessToken;

        if (!isAuthorized) {
            this.router.navigateByUrl('/login');
        }

        return isAuthorized;
    }
}
