import { UserEntiy } from 'src/entities/user.entity';

export interface RequestWithUser extends Request {
  user: UserEntiy;
}
