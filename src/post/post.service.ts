import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'src/user/entities/user.entity';
import { createSlugFromText } from 'src/common/utils/create-slug-from-text';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);

  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(dto: CreatePostDto, author: User) {
    const post = this.postRepository.create({
      title: dto.title,
      slug: createSlugFromText(dto.title),
      excerpt: dto.excerpt,
      content: dto.content,
      author,
      coverImageUrl: dto.coverImageUrl,
    });

    const created = await this.postRepository.save(post).catch((e: unknown) => {
      if (e instanceof Error) {
        this.logger.error('Erro ao criar o post', e.stack);
      }
      throw new BadRequestException('Erro ao criar o post');
    });
    return created;
  }
}
