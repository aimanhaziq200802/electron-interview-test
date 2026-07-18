import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    set accessToken(value: string) {
        localStorage.setItem('accessToken', String(value));
    }

    clear(): void {
        localStorage.clear();
    }

    logout(key: string): void {
        localStorage.removeItem(key);
    }

    setFromLogin(token: string): void {
        this.accessToken = token;
    }
}
