import { User } from '../../entities/User';

import { UserRepository } from '../../repositories/UserRepository';
 

class CreateUserUseCase {
  
  repository: UserRepository = UserRepository.getInstance();
  execute(name: string, age: number): User {
    const user = this.repository.create(name, age);
    return user;
  }
}

export { CreateUserUseCase };