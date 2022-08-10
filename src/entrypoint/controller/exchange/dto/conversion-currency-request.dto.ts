import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Currency } from '../vo/currency.vo';

export class ConversionCurrencyRequestDto
  implements Readonly<ConversionCurrencyRequestDto>
{
  @ApiProperty({
    description: 'Currency of origin',
    required: true,
    maxLength: 3,
    enum: Currency,
  })
  @IsNotEmpty()
  @IsEnum(Currency)
  originCurrency: Currency;

  @ApiProperty({
    description: 'Destination currency',
    required: true,
    maxLength: 3,
    enum: Currency,
  })
  @IsNotEmpty()
  @IsEnum(Currency)
  destinationCurrency: Currency;

  @ApiProperty({
    description: 'Source value to be converted',
    required: true,
    minimum: 0.01,
    maximum: 999999999.99,
    example: 1256.29,
  })
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false })
  sourceValue: number;
}
