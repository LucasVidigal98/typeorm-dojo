import { Request, Response } from "express";

import { ListUsersUseCase } from "./listUsersUseCase";

class ListUsersController {

  
  handle(req: Request, res: Response) {
    const useCase = new ListUsersUseCase();
    const users = useCase.execute();
    
    res.json(users);
  }
}

export { ListUsersController };