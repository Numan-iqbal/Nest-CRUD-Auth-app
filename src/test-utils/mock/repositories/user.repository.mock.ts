import { UserEntiy } from 'src/entities/user.entity';
import { FindOneOptions } from 'typeorm';

export class MockUserRepository {
  constructor(private users: UserEntiy[]) {}

  async findOne(options: FindOneOptions<UserEntiy>): Promise<UserEntiy> {
    const where = { ...options.where } as any;
    return this.users.find((user) => user.email === where.email);
  }

  async save(user: UserEntiy): Promise<UserEntiy> {
    this.users.push(user);

    return this.users.find((item) => item.email === user.email);
  }
}
