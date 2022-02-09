import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostInput } from './inputs/create-post.input';
import { PostDocument, Posts } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name)
    private postModel: Model<PostDocument>,
  ) {}

  async findAll() {
    return await this.postModel.find();
  }

  async createPost(createPostInput: CreatePostInput) {
    const newPost = new this.postModel(createPostInput);
    const createdPost = newPost.save();

    return createdPost;
  }
}
