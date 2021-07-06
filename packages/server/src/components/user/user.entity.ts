import { Entity, Column } from 'typeorm';
import { BaseEntity } from '@helpers/entity.helper';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;
}
