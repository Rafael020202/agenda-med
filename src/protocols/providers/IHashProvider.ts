export interface IHashProvider {
  hash(data: string, salt: number): Promise<string>;
  compare(data: string, compare: string): Promise<boolean>;
}
