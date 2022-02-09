import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from './inputs/create-post.input';
import { PostsService } from './posts.service';
import { Posts } from './schemas/post.schema';

@Resolver()
export class PostsResolver {
  constructor(private postService: PostsService) {}

  @Query(() => [Posts])
  posts(): Promise<Posts[]> {
    return this.postService.findAll();
  }

  @Mutation(() => Posts)
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Posts> {
    return this.postService.createPost(createPostInput);
  }
}
