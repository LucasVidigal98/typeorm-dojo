import { Request, Response } from 'express';

import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {
  
  async handle(req: Request, res: Response) {
    const useCase = new CreateUserUseCase();

    const { name, age } = req.body;

    const user = await useCase.execute(name as string, age as unknown as number);

    return res.json(user);
  }
}

export { CreateUserController };

