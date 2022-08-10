import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './entrypoint/controller/controller.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { UsecasesProxyModule } from './infrastructure/proxy/usecase-proxy.module';

@Module({
  imports: [LoggerModule, UsecasesProxyModule.register(), ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
