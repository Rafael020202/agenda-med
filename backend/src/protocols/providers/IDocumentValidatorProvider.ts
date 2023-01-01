export interface IDocumentValidatorProvider {
  isValid(document: string): boolean | Promise<boolean>;
}
