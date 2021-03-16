export class InternalServerError extends Error {
  constructor() {
    super("Ocorreu um erro interno")
    this.name = 'InternalServerError'
  }
}