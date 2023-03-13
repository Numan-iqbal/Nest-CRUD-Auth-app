import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { decodeJwtToken } from 'src/utils/jwt.utils';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    const user = decodeJwtToken(token);
    if (!user?.email) return false;
    request.user = user;
    return true;
  }
}

@Injectable()
export class Admin implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    const user = decodeJwtToken(token);
    const isAdmin = user.roles.find((role) => role.name === 'admin');
    if (!user?.email || !isAdmin) return false;
    request.user = user;
    return true;
  }
}
