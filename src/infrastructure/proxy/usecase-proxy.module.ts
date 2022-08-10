import { DynamicModule, Module } from '@nestjs/common';
import { ConvertCurrencies } from '../../core/usecase/convert-currencies';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

@Module({
  imports: [LoggerModule],
})
export class UsecasesProxyModule {
  static CONVERT_CURRENCIES_USECASE_PROXY = 'convertCurrenciesUsecaseProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [LoggerService],
          provide: UsecasesProxyModule.CONVERT_CURRENCIES_USECASE_PROXY,
          useFactory: (logger: LoggerService) => new ConvertCurrencies(logger),
        },
      ],
      exports: [UsecasesProxyModule.CONVERT_CURRENCIES_USECASE_PROXY],
    };
  }
}
