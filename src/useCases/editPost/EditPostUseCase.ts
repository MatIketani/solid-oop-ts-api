import { IEditPostDTO } from "./EditPostDTO";
import { IPostsRepository } from "../../repositories/IPostsRepository";

export class EditPostUseCase {
  private postsRepository: IPostsRepository;

  constructor(PostsRepository: IPostsRepository) {
    this.postsRepository = PostsRepository;
  }

  async execute(data: IEditPostDTO) {
    const { id, specialKey, content } = data;
    const post = await this.postsRepository.getPost(id);

    if (!post) {
      return 404;
    }

    if (specialKey != post.specialKey) {
      return 401;
    }

    this.postsRepository.editPost(id, content);
  }
}
