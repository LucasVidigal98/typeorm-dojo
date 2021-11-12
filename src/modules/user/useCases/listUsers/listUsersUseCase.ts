import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

class ListUsersUseCase {

  private repository: UserRepository = UserRepository.getInstance();

  async execute(): Promise<User[]> {
    return await this.repository.list();
  }

}

export { ListUsersUseCase };