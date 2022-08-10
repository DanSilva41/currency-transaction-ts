import { ApiProperty } from '@nestjs/swagger';
import { Currency } from '../vo/currency.vo';

export class ConversionCurrencyResponseDto
  implements Readonly<ConversionCurrencyResponseDto>
{
  @ApiProperty({
    description: 'Transaction identifier',
    example: '2c61f9cc-472b-11ec-81d3-0242ac130003',
  })
  identifier: string;

  @ApiProperty({
    description: 'User identifier',
    example: 'eb11b9d7-0a5f-4bd0-a582-d7e60cbf8b38',
  })
  userIdentifier: string;

  @ApiProperty({
    description: 'Currency of origin',
    enum: Currency,
  })
  originCurrency: Currency;

  @ApiProperty({
    description: 'Destination currency',
    enum: Currency,
  })
  destinationCurrency: Currency;

  @ApiProperty({
    description: 'Source value to be converted',
    example: 1256.29,
  })
  originValue: number;

  @ApiProperty({
    description: 'Converted value',
    example: 7562.96,
  })
  destinationValue: number;

  @ApiProperty({
    description: 'Conversion rate',
    example: 1.364,
  })
  conversionRate: number;

  @ApiProperty({
    description: 'Transaction datetime',
    example: '2021-01-30T08:30:00Z',
  })
  transactionTime: Date;
}
