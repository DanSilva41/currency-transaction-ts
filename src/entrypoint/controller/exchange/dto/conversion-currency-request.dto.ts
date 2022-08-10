import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Currency } from '../vo/currency.vo';

export class ConversionCurrencyRequestDto
  implements Readonly<ConversionCurrencyRequestDto>
{
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEnum(Currency)
  originCurrency: Currency;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEnum(Currency)
  destinationCurrency: Currency;

  @ApiProperty({ required: true })
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false })
  sourceValue: number;
}
