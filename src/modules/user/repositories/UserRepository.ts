import { getRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { IUserRepository } from './IUserRepository';

class UserRepository implements IUserRepository {

  private repository: Repository<User>;
  private static instance: UserRepository;

  constructor() {
    this.repository = getRepository(User);
  }

  public static getInstance(): UserRepository {
    if(!this.instance) {
      this.instance = new UserRepository();
    }

    return this.instance;
  }

  async create(name: string, age: number): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name, 
      age
    });

    await this.repository.save(user);

    return user;
  }

  async list(): Promise <User[]> {
    return await this.repository.find();
  }
 
}

export { UserRepository };