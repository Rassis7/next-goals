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

  it('Should returns correctly the body and status if success request', () => {
    const url = faker.internet.url()
    const body = faker.random.objectElement()
    const data = faker.random.objectElement()
    const status = faker.random.number()
    const { mocked, sut } = makeSut()
    const mockedAxios = mocked.post.mockResolvedValue({ data, status })
    const promise = sut.post({ url, body })
    expect(promise).toEqual(mockedAxios.mock.results[0].value)
  })
});

/**
 * 2: Caso de sucesso deve retornar o body e código 200
 * 3: Se der erro, StatusCode deve ser diferente de 200
 */
