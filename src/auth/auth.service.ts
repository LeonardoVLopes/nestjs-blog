import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'ola do AuthService';
  }
}
