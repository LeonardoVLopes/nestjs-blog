import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'src/user/entities/user.entity';
import { generateSlug } from 'src/common/utils/slug-generator';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(dto: CreatePostDto, author: User) {
    const post = this.postRepository.create({
      title: dto.title,
      slug: generateSlug(dto.title),
      excerpt: dto.excerpt,
      content: dto.content,
      author,
    });

    const created = await this.postRepository.save(post);

    return created
  }
}
