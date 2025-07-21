import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TransactionResponse } from '../../../models/transaction-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
    private apiUrl = `${environment.apiUrl}/transaction`;
    private tokenKey = 'auth_token';

    constructor(private http: HttpClient) {}

    getAllTransactionsFromUser(): Observable<TransactionResponse[]> {
      return this.http.get<TransactionResponse[]>(`${this.apiUrl}`);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }
}
