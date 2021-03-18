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

const postParams = () => ({
  url: faker.internet.url(),
  body: faker.random.objectElement(),
})

const postMockedValues = () => ({
  data: faker.random.objectElement(),
  status: faker.random.number(),
})

describe('HttpClient', () => {
  it('Should calls the axios correctly returning body and url', async () => {
    const { url, body } = postParams()
    const { mocked, sut } = makeSut()
    await sut.post({ url, body })
    expect(mocked.post).toHaveBeenCalledWith(url, body)
  });

  it('Should returns correctly the body and status if success request', () => {
    const { mocked, sut } = makeSut()
    const mockedAxios = mocked.post.mockResolvedValue(postMockedValues())
    const promise = sut.post(postParams())
    expect(promise).toEqual(mockedAxios.mock.results[0].value)
  })

  it('Should returns correctly the body and status if fails request', () => {
    const { mocked, sut } = makeSut()
    const mockedAxios = mocked.post.mockRejectedValueOnce({ response: postMockedValues() })
    const promise = sut.post(postParams())
    expect(promise).toEqual(mockedAxios.mock.results[0].value)
  })
});
