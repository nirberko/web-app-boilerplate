import {
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BaseEntity as ormBaseEntity,
} from 'typeorm';

export abstract class BaseEntity extends ormBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
