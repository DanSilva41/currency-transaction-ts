import { Module } from '@nestjs/common';
import { ControllerModule } from './entrypoint/controller/controller.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { UsecasesProxyModule } from './infrastructure/proxy/usecase-proxy.module';

@Module({
  imports: [LoggerModule, UsecasesProxyModule.register(), ControllerModule],
})
export class AppModule {}
