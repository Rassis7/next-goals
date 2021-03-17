import { CreateGoals, GoalsParams } from '@/clean/domain/usecases';
import { HttpPostClient, HttpStatusCode } from '@/clean/data/implementations/http';
import { InvalidCredentials, InternalServerError } from '@/clean/domain/errors';
import { Goals } from '@/clean/domain/models';

export class RemoteCreateGoals implements CreateGoals {
  constructor(
    readonly url: string,
    readonly httpPostClient: HttpPostClient<GoalsParams, Goals>,
  ) {}

  async create(params: GoalsParams): Promise<Goals> {
    const response = await this.httpPostClient.post({ url: this.url, body: params });

    switch (response.statusCode) {
      case HttpStatusCode.ok: return response.body as Goals;
      case HttpStatusCode.unauthorized: throw new InvalidCredentials();
      default: throw new InternalServerError();
    }
  }
}
