import { cpf } from 'cpf-cnpj-validator';

import { IDocumentValidatorProvider } from '@/protocols';

export class CpfCnpjValidatorProvider implements IDocumentValidatorProvider {
  isValid(document: string): boolean {
    return cpf.isValid(document);
  }
}
