import { IDeletePostDTO } from "./DeletePostDTO";
import { IPostsRepository } from "../../repositories/IPostsRepository";

export class DeletePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(PostsRepository: IPostsRepository) {
    this.postsRepository = PostsRepository;
  }

  async execute(data: IDeletePostDTO) {
    const { id, specialKey } = data;
    const post = await this.postsRepository.getPost(id);

    if (!post) {
      return 404;
    }

    if (specialKey != post.specialKey) {
      return 401;
    }

    await this.postsRepository.deletePost(id);
  }
}
