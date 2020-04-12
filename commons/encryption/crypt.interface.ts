export interface Crypt {
  hash(data: string): Promise<string>
  compare(data :string, comparableHash: string): Promise<boolean>
  encrypt(data: string): Promise<string>
  decrypt(data: string): Promise<string>
}