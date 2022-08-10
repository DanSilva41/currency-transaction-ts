/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Param, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ConvertCurrencies } from 'src/core/usecase/convert-currencies';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { UseCaseProxy } from 'src/infrastructure/proxy/usecase-proxy';
import { UsecasesProxyModule } from '../../../infrastructure/proxy/usecase-proxy.module';
import { ConversionCurrencyRequestDto } from './dto/conversion-currency-request.dto';

@Controller('exchange')
@ApiTags('exchange')
export class ExchangeController {
  constructor(
    @Inject(UsecasesProxyModule.CONVERT_CURRENCIES_USECASE_PROXY)
    private readonly convertCurrenciesUseCase: UseCaseProxy<ConvertCurrencies>,
    private readonly logger: LoggerService,
  ) {}

  @Post('user/:userId')
  convertCurrencies(
    @Param('userId') userId: string,
    @Body() conversionRequest: ConversionCurrencyRequestDto,
  ) {
    this.logger.log('EXCHANGE', 'POST Request for convert currencies');

    return this.convertCurrenciesUseCase.getInstance().execute();
  }
}
