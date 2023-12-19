// webpay.service.ts
import { Injectable } from '@nestjs/common';
import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules




@Injectable()
export class WebpayService {
  async createPayment(amount: number, description: string): Promise<{ url: string}> {
    // Aquí deberías realizar la lógica real de inicio de pago con Webpay
    // y obtener la URL de pago proporcionada por la pasarela de pago.
    // Por ahora, devolveremos una URL de ejemplo.
    let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
    let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;
    let amounts = amount;
    let returnUrl = "https://localhost:3000/webpay/commit"
    
    const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    const response = await tx.create(buyOrder, sessionId, amounts, returnUrl);
    

    return { url: response.token };
  }

  async commitPayment(token: string): Promise<object>{
    const tx = new WebpayPlus.Transaction(new Options(IntegrationCommerceCodes.WEBPAY_PLUS, IntegrationApiKeys.WEBPAY, Environment.Integration));
    const response = await tx.commit(token);

    return response;
  }
}
