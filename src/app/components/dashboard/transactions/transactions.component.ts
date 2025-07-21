import { Component, inject, OnInit } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { TransactionResponse } from '../../../models/transaction-response';
import { CurrencyPipe, DatePipe, TitleCasePipe, CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TransactionTypePipe } from '../../../pipes/TransactionTypePipe';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, TitleCasePipe, CurrencyPipe, DatePipe, TableModule, TransactionTypePipe],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent implements OnInit {
    private accountService = inject(TransactionsService)

    transactions: TransactionResponse[] = [];

    ngOnInit() {
        this.accountService.getAllTransactionsFromUser().subscribe({
            next: (data) => {
            this.transactions = data;
            console.log(this.transactions);
            },
            error: (err) => console.error(err)
        });
    }
}
