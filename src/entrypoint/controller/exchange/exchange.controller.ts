/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Param, Inject } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ConvertCurrencies } from 'src/core/usecase/convert-currencies';
import { LoggerService } from 'src/infrastructure/logger/logger.service';
import { UseCaseProxy } from 'src/infrastructure/proxy/usecase-proxy';
import { UsecasesProxyModule } from '../../../infrastructure/proxy/usecase-proxy.module';
import { ConversionCurrencyRequestDto } from './dto/conversion-currency-request.dto';
import { ConversionCurrencyResponseDto } from './dto/conversion-currency-response.dto';

@Controller('exchange')
@ApiTags('exchange')
export class ExchangeController {
  constructor(
    @Inject(UsecasesProxyModule.CONVERT_CURRENCIES_USECASE_PROXY)
    private readonly convertCurrenciesUseCase: UseCaseProxy<ConvertCurrencies>,
    private readonly logger: LoggerService,
  ) {}

  @ApiOkResponse({
    description: 'Conversion performed',
    type: ConversionCurrencyResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @Post('user/:userId')
  convertCurrencies(
    @Param('userId') userId: string,
    @Body() conversionRequest: ConversionCurrencyRequestDto,
  ): ConversionCurrencyResponseDto {
    this.logger.log('EXCHANGE', 'POST Request for convert currencies');

    this.convertCurrenciesUseCase.getInstance().execute();
    return new ConversionCurrencyResponseDto();
  }
}
