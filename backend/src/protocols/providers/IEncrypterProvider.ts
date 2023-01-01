export interface IEncrypterProvider {
  encrypt(payload: any): string;
}
