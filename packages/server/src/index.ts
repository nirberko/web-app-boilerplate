import { App } from '@config/app';
import 'reflect-metadata';
import { databaseLoader } from './loaders/database.loader';

(async () => {
  await databaseLoader();
  new App().start().then(() => {
    console.log('app is running');
  });
})();
