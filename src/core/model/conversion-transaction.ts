import { randomUUID } from 'crypto';

export class ConversionTransaction implements Readonly<ConversionTransaction> {
  identifier = randomUUID();
  userIdentifier: string;
  originCurrency: string;
  destinationCurrency: string;
  originValue: number;
  destinationValue: number;
  conversionRate: number;
  transactionTime: Date;
}
