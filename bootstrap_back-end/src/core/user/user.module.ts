import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from '../user/user.entity';
import { UserListContoller } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserRepository]),
  ],
  controllers: [UserListContoller],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}