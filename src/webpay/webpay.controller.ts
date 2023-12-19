import { Controller } from '@nestjs/common';
import { WebpayService } from './webpay.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('webpay')
export class WebpayController {
    constructor(private readonly webpayService: WebpayService) {}

  @GrpcMethod('WebpayService', 'CreatePayment')
  async createPayment(data: any): Promise<{ url: string }> {
    const { amount, description } = data;
    const paymentUrl = this.webpayService.createPayment(amount, description);
    return paymentUrl;
  }

  @GrpcMethod('WebpayService', 'CommitPayment')
  async commitPayment(data:any): Promise<object>{
    const {token} = data;

    const commitResponse = this.webpayService.commitPayment(token);

    return commitResponse;
  }
}
