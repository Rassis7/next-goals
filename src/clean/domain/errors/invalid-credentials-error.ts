export class InvalidCredentials extends Error {
  constructor() {
    super('Suas credenciais estão inválidas.');
    this.name = 'InvalidCredentialsError';
  }
}
