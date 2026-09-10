import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JsonWebTokenError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest<TUser = any>(
    err: any,
    user: any,
    info: any,
    context: ExecutionContext,
    status?: any,
  ): TUser {
    const req = context.switchToHttp().getRequest();
    const authHeader = req?.headers?.authorization;
    // debug info to help diagnose missing/invalid token in requests
    // (remove or lower log level in production)
    console.debug('[JwtAuthGuard] authorization header:', authHeader);
    console.debug('[JwtAuthGuard] info:', info);
    console.debug('[JwtAuthGuard] err:', err);

    if (err || !user || info instanceof JsonWebTokenError) {
      throw new UnauthorizedException('voce precisa fazer login');
    }

    return user;
  }
}
