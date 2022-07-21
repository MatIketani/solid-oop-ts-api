import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController {
  private useCase: GetPostUseCase;

  constructor(useCase: GetPostUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const post = this.useCase.execute(id);

      if (!post) {
        return response.sendStatus(404);
      }

      response.status(200).json(post);
    } catch (err) {
      response.sendStatus(500);
    }
  }
}
