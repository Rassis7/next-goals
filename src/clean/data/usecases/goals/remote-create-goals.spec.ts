import faker from 'faker'
import { Goals } from "@/clean/domain/models";
import { CreateGoals, GoalsParams } from "@/clean/domain/usecases";
import { HttpPostClient, HttpStatusCode } from '@/clean/data/implementations/http';
import {InvalidCredentials, InternalServerError} from '@/clean/domain/errors'
import { HttpPostClientSpy } from '@/clean/data/mocks';
import {mockGoalsParams} from '@/clean/domain/mocks'

class RemoteCreateGoals implements CreateGoals {
  constructor (
    readonly url: string,
    readonly httpPostClient: HttpPostClient<GoalsParams, Goals>
  ){}

  async create(params: GoalsParams): Promise<Goals> {
    const response = await this.httpPostClient.post({url: this.url, body: params})

    switch(response.statusCode) {
      case HttpStatusCode.ok: return response.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentials();
      default: throw new InternalServerError();
    }
  }
}


describe("CreateGoals", () => {
  it("Should calls HttpPostClient with correct url", async () => {
    const url = faker.internet.url();
    const spy = new HttpPostClientSpy<GoalsParams, Goals>()
    const sut = new RemoteCreateGoals(url, spy)
    await sut.create(mockGoalsParams())
    expect(spy.url).toBe(url)
  });
});