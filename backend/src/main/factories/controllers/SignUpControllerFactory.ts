import { SignUpController } from '@/controllers';
import { DynamoUserRepository } from '@/infra/db';
import {
  BcryptProvider,
  EmailValidatorProvider,
  CpfCnpjValidatorProvider,
  SimpleInfoProvider,
} from '@/infra/providers';

export const makeSignUpController = () => {
  const userRepository = new DynamoUserRepository();
  const bcryptProvider = new BcryptProvider();
  const emailValidatorProvider = new EmailValidatorProvider();
  const cpfCnpjValidatorProvider = new CpfCnpjValidatorProvider();
  const simpleInfoProvider = new SimpleInfoProvider();

  return new SignUpController(
    userRepository,
    bcryptProvider,
    emailValidatorProvider,
    cpfCnpjValidatorProvider,
    simpleInfoProvider
  );
};
