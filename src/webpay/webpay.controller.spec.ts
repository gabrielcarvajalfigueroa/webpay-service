import { Test, TestingModule } from '@nestjs/testing';
import { WebpayController } from './webpay.controller';

describe('WebpayController', () => {
  let controller: WebpayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebpayController],
    }).compile();

    controller = module.get<WebpayController>(WebpayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
