import { Component, inject, OnInit } from '@angular/core';
import { AccountService } from '../../services/account-service';
import { AccountResponse } from '../../models/account-response';
import { CardModule } from 'primeng/card';
import { CurrencyPipe, DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CardModule, TitleCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

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
