import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { Config } from './config';

export class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.middlewares();
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

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(helmet());
  }
}

export const { app } = new App();
