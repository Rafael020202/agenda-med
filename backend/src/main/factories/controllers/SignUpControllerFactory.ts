import { SignUpController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';
import {
  BcryptProvider,
  EmailValidatorProvider,
  CpfCnpjValidatorProvider,
} from '@/infra/providers';

export const makeSignUpController = () => {
  const userRepository = new DynamoUserRepository();
  const bcryptProvider = new BcryptProvider();
  const emailValidatorProvider = new EmailValidatorProvider();
  const cpfCnpjValidatorProvider = new CpfCnpjValidatorProvider();

  return new SignUpController(
    userRepository,
    bcryptProvider,
    emailValidatorProvider,
    cpfCnpjValidatorProvider
  );
};
