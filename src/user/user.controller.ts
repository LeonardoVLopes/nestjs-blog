import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomParseIntPipe } from 'src/common/pipes/custom-parse0int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    return 'ola do controller do user';
  }
}
