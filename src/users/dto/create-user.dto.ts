import { IsEmail, IsNotEmpty, IsEnum, IsString } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(['INTER', 'ENGINEER', 'ADMIN'], {
    message: 'Role must be one of the following: INTER, ENGINEER, ADMIN',
  })
  role: 'INTER' | 'ENGINEER' | 'ADMIN';
}
