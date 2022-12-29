import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import { IDocumentValidatorProvider } from '@/protocols';

export class CpfCnpjValidatorProvider implements IDocumentValidatorProvider {
  isCpfValid(cpf: string): boolean {
    return cpfValidator.isValid(cpf);
  }
}
