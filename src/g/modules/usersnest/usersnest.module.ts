import { Module } from '@nestjs/common';
import { UsersnestController } from './usersnest.controller';

@Module({
  controllers: [UsersnestController]
})
export class UsersnestModule {}
