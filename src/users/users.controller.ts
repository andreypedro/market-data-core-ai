import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import type { IUser } from './users.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  /*
  GET /users
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  @Get()
  findAll(@Query('role') role?: 'INTER' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.usersService.findOne(+id);
  }

  @Get('interns')
  findAllInterns() {
    return this.usersService.findAllInterns();
  }

  @Post()
  create(@Body() user: Omit<IUser, 'id'>) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: IUser) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return { id: +id };
  }
}
