import { Module } from '@nestjs/common';
import { SweetController } from './sweet.controller';
import { SweetService } from './sweet.service';

@Module({
  imports: [],
  controllers: [SweetController],
  providers: [SweetService],
})
export class SweetModule {}
