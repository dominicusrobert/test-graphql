import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostSchema } from './schemas/post.schema';

@Module({
  providers: [PostsService, PostsResolver],
  imports: [
    MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }]),
  ],
})
export class PostsModule {}
