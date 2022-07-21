import { IPostsRepository } from "../../repositories/IPostsRepository";

export class GetPostUseCase {
  private postsRepository: IPostsRepository;

  constructor(PostsRepository: IPostsRepository) {
    this.postsRepository = PostsRepository;
  }

  async execute(id: string) {
    return await this.postsRepository?.getPost(id);
  }
}
