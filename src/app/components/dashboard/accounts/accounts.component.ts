import { Component, inject, OnInit } from '@angular/core';
import { AccountResponse } from '../../../models/account-response';
import { AccountService } from '../../../services/account-service';
import { TitleCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-accounts',
  imports: [CardModule, TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit {
    private accountService = inject(AccountService)

    account?: AccountResponse[];

    ngOnInit() {
        this.accountService.getAllAccountsFromUser().subscribe({
            next: (data) => {
            this.account = data;
            console.log(this.account);
            },
            error: (err) => console.error(err)
        });
    }
}
