import {
  AccessLevel,
  SingletonProto,
} from '@eggjs/tegg';
import { AppendOptions, AppendResult, DownloadOptions, NFSClient, UploadOptions, UploadResult } from 'cnpmcore/common/typing';
import { Readable } from 'stream';

@SingletonProto({
  name: 'nfsClient',
  accessLevel: AccessLevel.PUBLIC,
})
export class NFSClientAdapter implements NFSClient {
  uploadBytes(bytes: Uint8Array, options: UploadOptions): Promise<UploadResult> {
    console.log('uploadBytes', bytes, options);
    throw new Error('Method not implemented.');
  }
  appendBytes(bytes: Uint8Array, options: AppendOptions): Promise<AppendResult> {
    console.log('appendBytes', bytes, options);
    throw new Error('Method not implemented.');
  }
  upload(filePath: string, options: UploadOptions): Promise<UploadResult> {
    console.log('upload', filePath, options);
    throw new Error('Method not implemented.');
  }
  remove(key: string): Promise<void> {
    console.log('remove', key);
    throw new Error('Method not implemented.');
  }
  readBytes(key: string): Promise<Uint8Array | undefined> {
    console.log('readBytes', key);
    throw new Error('Method not implemented.');
  }
  createDownloadStream(key: string): Promise<Readable | undefined> {
    console.log('createDownloadStream', key);
    throw new Error('Method not implemented.');
  }
  download(key: string, filepath: string, options: DownloadOptions): Promise<void> {
    console.log('download', key, filepath, options);
    throw new Error('Method not implemented.');
  }
  url?(key: string): string {
    console.log('url', key);
    throw new Error('Method not implemented.');
  }
}
