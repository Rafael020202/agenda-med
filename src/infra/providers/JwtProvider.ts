import jwt from 'jsonwebtoken';

import { IEncrypterProvider } from '@/protocols';

export class JwtProvider implements IEncrypterProvider {
  constructor(private secret: string) {}

  encrypt(payload: any): string {
    return jwt.sign(payload, this.secret);
  }
}
