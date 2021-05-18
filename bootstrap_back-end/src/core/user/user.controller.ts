import {
    Controller,
    Get,
  } from '@nestjs/common';

  import { UserService } from './user.service';

  
  @Controller('user')
  export class UserListContoller {
    constructor(private userService: UserService) {}
  
    @Get('/')
    getUserList() {
        return this.userService.getUserList()
    }
  
  }
  