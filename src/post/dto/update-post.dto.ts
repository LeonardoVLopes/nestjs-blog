import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePostDto extends PartialType(
  PickType(CreatePostDto, ['title', 'excerpt', 'content', 'coverImageUrl']),
) {
  @IsOptional() // vai depender da logica que criamos no service ou no NextJS
  @IsBoolean({ message: 'Campo de publicar post precisar ser boolean' })
  published?: boolean;
}
