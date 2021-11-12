import { Request, Response } from "express";

import { ListUsersUseCase } from "./listUsersUseCase";

class ListUsersController {

  
  async handle(req: Request, res: Response) {
    const useCase = new ListUsersUseCase();
    const users = await useCase.execute();
    
    res.json(users);
  }
}

export { ListUsersController };