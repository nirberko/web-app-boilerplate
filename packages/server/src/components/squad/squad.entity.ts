import { Entity, Column, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '@helpers/entity.helper';
import { User } from '@components/user/user.entity';

@Entity()
export class Squad extends BaseEntity {
  @Column()
  name: string;

  @ManyToMany(() => User)
  @JoinTable()
  members: User[];
}
