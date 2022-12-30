import jwt from 'jsonwebtoken';

import { IEncrypterProvider, IDecrypterProvider } from '@/protocols';

export class JwtProvider implements IEncrypterProvider, IDecrypterProvider {
  constructor(private secret: string) {}
  decrypt(token: string): Promise<any> {
    return jwt.verify(token, this.secret) as any;
  }

  encrypt(payload: any): string {
    return jwt.sign(payload, this.secret);
  }
}
