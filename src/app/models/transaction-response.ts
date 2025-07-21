import { AccountResponse } from './account-response';
import { CategoryResponse } from './category-response';

export interface TransactionResponse {
  id: string;
  amount: number;
  transactionType: string;
  description: string;
  date: string;
  categoryDomain: CategoryResponse;
  accountDomain: AccountResponse;
  createdAt: string;
  updatedAt: string;
}
