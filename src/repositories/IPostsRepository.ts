import { Post } from "../entities/Post";

export interface IPostsRepository {
  createPost(content: string): Promise<Post>;
  getPost(id: string): Promise<Post>;
  editPost(id: string, content: string): Promise<void>;
  deletePost(id: string): Promise<void>;
}
