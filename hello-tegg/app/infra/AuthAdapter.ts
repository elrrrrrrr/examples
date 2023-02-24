import { AccessLevel, EggContext, SingletonProto } from '@eggjs/tegg';
import { AuthAdapter } from 'cnpmcore/infra/AuthAdapter';
import { randomUUID } from 'crypto';
import { AuthUrlResult, userResult } from 'node_modules/cnpmcore/dist/app/common/typing';

const ONE_DAY = 3600 * 24;

@SingletonProto({
  name: 'authAdapter',
  accessLevel: AccessLevel.PUBLIC,
})
export class MyAuthAdapter extends AuthAdapter {
  async getAuthUrl(ctx: EggContext): Promise<AuthUrlResult> {
    const sessionId = randomUUID();
    await this.redis.setex(sessionId, ONE_DAY, '');
    return {
      // 替换实际企业内的登录中心地址
      loginUrl: `${ctx.origin}/hello?name=${sessionId}`,
      doneUrl: `${ctx.href}/done/session/${sessionId}`,
    };
  }

  async ensureCurrentUser(): Promise<userResult | null> {
    return {
      name: 'hello',
      email: 'hello@cnpmjs.org',
    };
  }
}
