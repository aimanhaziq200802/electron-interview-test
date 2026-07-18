import { Dashboard } from '../models/dashboard.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    private apiUrl = environment.url + '/api/dashboard';

    constructor(private http: HttpClient) {}

    getDashboard(): Observable<Dashboard> {
        return this.http.get<Dashboard>(this.apiUrl);
    }
}
