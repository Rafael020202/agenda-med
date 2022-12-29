import bcrypt from 'bcryptjs';

import { IHashProvider } from '@/protocols';

export class BcryptProvider implements IHashProvider {
  async hash(data: string, salt: number): Promise<string> {
    return bcrypt.hash(data, salt);
  }

  async compare(data: string, compare: string): Promise<boolean> {
    return bcrypt.compare(data, compare);
  }
}
