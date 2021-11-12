import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/UserRepository';

class ListUsersUseCase {

  private repository: UserRepository = UserRepository.getInstance();

  execute(): User[] {
    return this.repository.list();
  }

}

export { ListUsersUseCase };