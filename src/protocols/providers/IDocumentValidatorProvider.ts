export interface IDocumentValidatorProvider {
  isCpfValid(cpf: string): boolean;
}
