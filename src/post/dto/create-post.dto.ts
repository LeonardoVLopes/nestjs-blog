import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Titulo precisa ser uma string' })
  @Length(10, 150, { message: 'Titulo precisa ter entre 10 e 150 caracteres' })
  title!: string;

  @IsString({ message: 'Resumo precisa ser uma string' })
  @Length(10, 200, { message: 'Resumo precisa ter entre 10 e 200 caracteres' })
  excerpt!: string;

  @IsString({ message: 'Conteudo precisa ser uma string' })
  @IsNotEmpty({ message: 'Conteudo nao pode ficar vazio' })
  content!: string;

  @IsOptional() // vai ser requerido no NextJS
  @IsUrl({ require_tld: false })
  coverImageUrl?: string;
}
