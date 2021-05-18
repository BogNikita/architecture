import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private UserRepository: UserRepository,
  ) {}

  async getUserList(): Promise<UserEntity> {
    const userList = await this.UserRepository.getUserList();

    return userList;
  }
  
}
