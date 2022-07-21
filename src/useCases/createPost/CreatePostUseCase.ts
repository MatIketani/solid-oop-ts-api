import { IPostsRepository } from "../../repositories/IPostsRepository";
import { ICreatePostDTO } from "./CreatePostDTO";
import { Post } from "../../entities/Post";

export class CreatePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(PostsRepository: IPostsRepository) {
    this.postsRepository = PostsRepository;
  }

  async execute(data: ICreatePostDTO) {
    const post = new Post({
      content: data.content,
      createdAt: Date.now(),
    });
    await this.postsRepository.createPost;
  }
}
