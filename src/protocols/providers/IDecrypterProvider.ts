export interface IDecrypterProvider {
  decrypt(token: string): Promise<any>;
}
