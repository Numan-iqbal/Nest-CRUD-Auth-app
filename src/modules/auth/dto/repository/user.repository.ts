import { Injectable } from '@nestjs/common';
import { UserEntiy } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntiy> {}
