import {
  AccessLevel,
  SingletonProto,
} from '@eggjs/tegg';
import { QueueAdapter } from 'cnpmcore/common/typing';

/**
 * Use sort set to keep queue in order and keep same value only insert once
 */
@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
  name: 'queueAdapter',
})
export class RedisQueueAdapter implements QueueAdapter {
  push<T>(key: string, item: T): Promise<boolean> {
    console.log('push', key, item);
    throw new Error('Method not implemented.');
  }
  pop<T>(key: string): Promise<T | null> {
    console.log('pop', key);
    throw new Error('Method not implemented.');
  }
  length(key: string): Promise<number> {
    console.log('length', key);
    throw new Error('Method not implemented.');
  }
}
