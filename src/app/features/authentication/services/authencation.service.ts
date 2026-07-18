import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/authentication.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.url + '/api/account/login';

    constructor(private http: HttpClient) {}

    login(body: LoginModel): Observable<string> {
        return this.http.post<string>(this.apiUrl, body);
    }
}
