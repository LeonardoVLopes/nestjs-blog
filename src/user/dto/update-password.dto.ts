import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class UpdatePasswordDto {
  @IsString({ message: 'senha precisa ser uma string' })
  @IsNotEmpty({ message: 'senha nao pode estar vazia' })
  currentPassword!: string;

  @IsString({ message: 'nova senha precisa ser uma string' })
  @IsNotEmpty({ message: 'nova senha nao pode estar vazia' })
  @MinLength(6, { message: 'nova senha deve ter um minimo de 6 caracteres' })
  newPassword!: string;
}
