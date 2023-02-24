import {
  HTTPController,
  HTTPMethod,
  HTTPMethodEnum,
  Context,
  EggContext,
  HTTPQuery,
  Middleware,
  Inject,
} from '@eggjs/tegg';
import { EggHttpClient, EggLogger } from 'egg';
import { traceMethod } from '../middleware/trace_method';
import { HelloService } from '../biz/HelloService';

@HTTPController()
@Middleware(traceMethod)
export class HelloController {
  @Inject()
  private readonly helloService: HelloService;

  @Inject()
  private readonly logger: EggLogger;

  @Inject()
  private readonly httpclient: EggHttpClient;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: '/hello',
  })
  async hello(@Context() ctx: EggContext, @HTTPQuery() name: string) {
    this.logger.info('access url: %s', ctx.url);

    await this.httpclient.request(`${ctx.origin}/-/v1/login/sso/${name}`, { method: 'POST' });

    const message = await this.helloService.hello(name);

    return {
      success: true,
      data: {
        message,
      },
    };
  }
}
