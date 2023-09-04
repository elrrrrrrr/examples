import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  tegg: {
    enable: true,
    package: '@eggjs/tegg-plugin',
  },
  teggConfig: {
    enable: true,
    package: '@eggjs/tegg-config',
  },
  teggController: {
    enable: true,
    package: '@eggjs/tegg-controller-plugin',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  teggOrm: {
    enable: true,
    package: '@eggjs/tegg-orm-plugin',
  },
  eventbusModule: {
    enable: true,
    package: '@eggjs/tegg-eventbus-plugin',
  },
  tracer: {
    enable: true,
    package: 'egg-tracer',
  },
  typeboxValidate: {
    enable: true,
    package: 'egg-typebox-validate',
  },
  elasticsearch: {
    enable: true,
    package: "eggjs-elasticsearch",
  },
};

export default plugin;
