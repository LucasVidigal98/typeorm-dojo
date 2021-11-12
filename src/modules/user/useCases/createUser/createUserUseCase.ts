import { User } from '../../entities/User';

import { UserRepository } from '../../repositories/UserRepository';
 

class CreateUserUseCase {
  
  repository: UserRepository = UserRepository.getInstance();
  async execute(name: string, age: number): Promise<User> {
    const user = await this.repository.create(name, age);
    return user;
  }
}

export { CreateUserUseCase };