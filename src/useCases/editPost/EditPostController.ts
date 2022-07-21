import { Request, Response } from "express";
import { EditPostUseCase } from "./EditPostUseCase";

export class EditPostController {
  private useCase: EditPostUseCase;

  constructor(useCase: EditPostUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response) {
    const { specialKey, content } = request.body;
    const { id } = request.params;

    if (!specialKey || !content) {
      return response.sendStatus(400);
    }

    try {
      response.sendStatus(
        (await this.useCase.execute({ id, specialKey, content })) || 404,
      );
    } catch (err) {
      response.sendStatus(500);
    }
  }
}
