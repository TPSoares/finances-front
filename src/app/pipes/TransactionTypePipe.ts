import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionTypeLabel',
  standalone: true
})
export class TransactionTypePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'income':
        return 'Entrada';
      case 'expense':
        return 'Saída';
      default:
        return value;
    }
  }
}
