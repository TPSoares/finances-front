import { TransactionResponse } from './transaction-response';

export interface AccountResponse {
  id: string;
  name: string;
  accountType: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  transactions: TransactionResponse[];
}
