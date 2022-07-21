import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  private useCase: CreatePostUseCase;

  constructor(useCase: CreatePostUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response) {
    const { content } = request.body;

    if (!content) {
      return response.sendStatus(400);
    }

    try {
      await this.useCase.execute({ content });
      response.sendStatus(200);
    } catch (err) {
      response.sendStatus(500);
    }
  }
}
