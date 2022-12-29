export interface IEmailValidatorProvider {
  isValid(email: string): boolean;
}
