import { RemoteCreateGoals } from './remote-create-goals';
import faker from 'faker';
import { Goals } from '@/clean/domain/models';
import { GoalsParams } from '@/clean/domain/usecases';
import { HttpPostClientSpy } from '@/clean/data/mocks';
import { mockGoalsParams, mockGoalsModel } from '@/clean/domain/mocks';
import { HttpStatusCode } from '@/clean/data/implementations/http/http-response';
import { InternalServerError, InvalidCredentials } from '@/clean/domain/errors';

const makeSut = (url: string = faker.internet.url()) => {
  const spy = new HttpPostClientSpy<GoalsParams, Goals>();
  const sut = new RemoteCreateGoals(url, spy);
  return { spy, sut }
}

describe('CreateGoals', () => {
  it('Should calls HttpPostClient with correct url', async () => {
    const url = faker.internet.url()
    const { sut, spy } = makeSut(url)
    await sut.create(mockGoalsParams());
    expect(spy.url).toBe(url);
  });

  it('Should return the Body and StatusCode OK if everything goes correctly', async () => {
    const goals = mockGoalsModel()
    const { sut, spy } = makeSut();
    spy.response.body = goals
    await sut.create(mockGoalsParams());
    expect(spy.response.body).toBe(goals);
    expect(spy.response.statusCode).toEqual(200);
  })

  it('Should return InternalServerError if any error occurs', async () => {
    const { sut, spy } = makeSut();
    spy.response.statusCode = HttpStatusCode.serverError
    const promise = sut.create(mockGoalsParams());
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  it('Should return InvalidCredentials if error 401 occurs', async () => {
    const { sut, spy } = makeSut();
    spy.response.statusCode = HttpStatusCode.unauthorized
    const promise = sut.create(mockGoalsParams());
    await expect(promise).rejects.toThrow(new InvalidCredentials())
  })
});
