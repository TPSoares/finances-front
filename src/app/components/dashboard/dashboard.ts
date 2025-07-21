import { Component } from '@angular/core';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';

@Component({
  selector: 'app-dashboard',
  imports: [AccountsComponent, TransactionsComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {



}
