import { Injectable } from '@nestjs/common';
import { RoleEntity } from 'src/entities/role.entity';
import { EntityRepository, Repository } from 'typeorm';

@Injectable()
export class RoleRepository extends Repository<RoleEntity> {
  async findByNames(names: string[]): Promise<RoleEntity[]> {
    const queryBuilder = this.createQueryBuilder('role_entity');
    const entities = queryBuilder
      .where('role_entity.name IN (:...names)', { names })
      .getMany();
    return entities;
  }
}
