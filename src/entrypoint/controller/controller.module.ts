import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/infrastructure/logger/logger.module';
import { UsecasesProxyModule } from 'src/infrastructure/proxy/usecase-proxy.module';
import { ExchangeController } from './exchange/exchange.controller';

@Module({
  imports: [UsecasesProxyModule.register(), LoggerModule],
  controllers: [ExchangeController],
})
export class ControllerModule {}
