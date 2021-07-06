import { createConnection, getConnectionOptions } from 'typeorm';
import { customNamingStrategy } from '@config/typeorm.config';
import { Connection } from 'typeorm/connection/Connection';

export function databaseLoader(): Promise<Connection> {
  return new Promise<Connection>((resolve) => {
    getConnectionOptions().then((connectionOptions) => {
      return resolve(
        createConnection(
          Object.assign(connectionOptions, {
            namingStrategy: new customNamingStrategy(),
          })
        )
      );
    });
  });
}
