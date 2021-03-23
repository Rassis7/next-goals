import {
  HttpPostClient, HttpPostClientParams,
} from '@/clean/data/implementations/http/http-post-client';
import {
  HttpResponse, HttpStatusCode,
} from '@/clean/data/implementations/http';

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string;

  body?: T;

  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  }

  async post({
    url, body,
  }: HttpPostClientParams<T>): Promise<HttpResponse<R>> {
    this.url = url;
    this.body = body;
    return Promise.resolve(this.response);
  }
}
