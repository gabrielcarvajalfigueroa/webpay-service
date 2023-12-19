import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebpayController } from './webpay/webpay.controller';
import { WebpayService } from './webpay/webpay.service';

@Module({
  imports: [],
  controllers: [AppController, WebpayController],
  providers: [AppService, WebpayService],
})
export class AppModule {}
