import { ILogger } from '../logger/logger.inteface';

export class ConvertCurrencies {
  constructor(private readonly logger: ILogger) {}

  async execute() {
    this.logger.log('EXCHANGE', 'Executing currencies conversion');
  }
}
