import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsString({ message: 'nome precisa ser uma string' })
  @IsNotEmpty({ message: 'nome nao pode estar vazio' })
  name!: string;

  @IsEmail({}, { message: 'email precisa ser um email valido' })
  email!: string;

  @IsString({ message: 'senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha nao pode estar vazia' })
  password!: string;
}
