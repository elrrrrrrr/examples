import {
  AccessLevel,
  SingletonProto,
} from '@eggjs/tegg';

import { SearchAdapter } from 'cnpmcore/common/typing';

/**
 * Use elasticsearch to search the huge npm packages.
 */
@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
  name: 'searchAdapter',
})
export class ESSearchAdapter implements SearchAdapter {
  search(query: any): Promise<any> {
    console.log('search', query);
    throw new Error('Method not implemented.');
  }
  upsert<T>(id: string, document: T): Promise<string> {
    console.log('upsert', id, document);
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<string> {
    console.log('delete', id);
    throw new Error('Method not implemented.');
  }

}
