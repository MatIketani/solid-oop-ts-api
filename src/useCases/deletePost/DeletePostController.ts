import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
  private useCase: DeletePostUseCase;

  constructor(useCase: DeletePostUseCase) {
    this.useCase = useCase;
  }

  async handle(request: Request, response: Response) {
    const { specialKey } = request.body;
    const { id } = request.params;

    if (!specialKey) {
      return response.sendStatus(400);
    }

    try {
      response.sendStatus(
        (await this.useCase.execute({ id, specialKey })) || 200,
      );
    } catch (err) {
      response.sendStatus(500);
    }
  }
}
