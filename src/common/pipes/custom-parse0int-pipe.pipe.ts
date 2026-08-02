import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export class CustomParseIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('parametro precisa ser um numero'),
    });
  }
}
