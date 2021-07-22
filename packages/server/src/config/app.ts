import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import { Config } from './config';

import { userRouter } from '@components/user/user.routes';

export class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  start(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.app.listen(Config.PORT, resolve);
      } catch (err) {
        reject(err);
      }
    });
  }

  middlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(morgan('tiny'));
  }

  routes(): void {
    this.app.use('/user', userRouter);
  }
}

export const { app } = new App();
