import { User } from '@components/user/user.entity';

export function createUser(name: string): Promise<User> {
  const user = new User();
  user.name = name;

  return user.save();
}
