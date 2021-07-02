import { App } from '@config/app';
import 'reflect-metadata';

(async () => {
  await new App().start();
})();
