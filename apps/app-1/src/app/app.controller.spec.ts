import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('getData', () => {
    it('should return 6', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getSum(3, 3)).toEqual(6);
    });
  });
});
