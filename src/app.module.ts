import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SweetModule } from './sweet/sweet.module';

@Module({
  imports: [
    UserModule,
    SweetModule,
  ],
})
export class AppModule {}
