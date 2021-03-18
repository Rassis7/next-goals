import faker from 'faker'

import { mockAxios } from '@/clean/infra/mocks';
import { HttpClient } from './http-client';

// Estou usando essa função, assim minhas requests não serão verdadeiras.
// Posso criar um mock meu do axios e simular as ações
jest.mock('axios')

const makeSut = () => {
  const sut = new HttpClient()
  const mocked = mockAxios()
  return { sut, mocked }
}

describe('HttpClient', () => {
  it('Should calls the axios correctly returning body and url', async () => {
    const url = faker.internet.url()
    const body = faker.random.objectElement()
    const { mocked, sut } = makeSut()
    await sut.post({ url, body })
    expect(mocked.post).toHaveBeenCalledWith(url, body)
  });
});
