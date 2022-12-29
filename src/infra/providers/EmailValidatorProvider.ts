import emailValidator from 'email-validator';

import { IEmailValidatorProvider } from '@/protocols';

export class EmailValidatorProvider implements IEmailValidatorProvider {
  isValid(email: string): boolean {
    return emailValidator.validate(email);
  }
}
