import {
  axios, AxiosResponse,
} from '@/clean/infra/services/axios'
import {
  HttpPostClient, HttpPostClientParams, HttpResponse,
} from '@/clean/data/implementations/http';

export class HttpClient<T=any, R=any> implements HttpPostClient<T, R> {
  post = async ({
    url, body,
  }: HttpPostClientParams<T>): Promise<HttpResponse<R>> => {
    let httpResponse: AxiosResponse<any>
    try {
      httpResponse = await axios.post(url, body)
    } catch (error) {
      httpResponse = error.response
    }

    return {
      body: httpResponse.data,
      statusCode: httpResponse.status,
    }
  }
}
