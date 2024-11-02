import { SyncMode } from 'cnpmcore/common/constants';
import { cnpmcoreConfig } from 'cnpmcore/port/config';


export default () => {
  const config:any = {};
  config.cnpmcore = {
    ...cnpmcoreConfig,
    enableChangesStream: false,
    syncMode: SyncMode.all,
  };

  config.redis = {
    client: {
      port: Number(process.env.CNPMCORE_REDIS_PORT || 6379),
      host: process.env.CNPMCORE_REDIS_HOST || '127.0.0.1',
      password: process.env.CNPMCORE_REDIS_PASSWORD || '',
      db: Number(process.env.CNPMCORE_REDIS_DB || 0),
    },
  };

  config.orm = {
    client: 'mysql2',
    database: process.env.CNPMCORE_MYSQL_DATABASE || process.env.MYSQL_DATABASE || 'cnpmcore',
    host: process.env.CNPMCORE_MYSQL_HOST || process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.CNPMCORE_MYSQL_PORT || process.env.MYSQL_PORT || 3306,
    user: process.env.CNPMCORE_MYSQL_USER || process.env.MYSQL_USER || 'root',
    password: process.env.CNPMCORE_MYSQL_PASSWORD || process.env.MYSQL_PASSWORD,
    charset: 'utf8mb4',
    logger: {
      // https://github.com/cyjake/leoric/blob/master/docs/zh/logging.md#logqueryerror
      // ignore query error
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};
