import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { environment } from '../../environments/environment';
import { AccountResponse } from '../models/account-response';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private apiUrl = `${environment.apiUrl}/account`;
    private tokenKey = 'auth_token';

    constructor(private http: HttpClient) {}

    getAllAccountsFromUser(): Observable<AccountResponse[]> {
      return this.http.get<AccountResponse[]>(`${this.apiUrl}`);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }
}
