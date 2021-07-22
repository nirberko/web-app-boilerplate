import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';

export function databaseLoader(): Promise<Connection> {
  return createConnection();
}
