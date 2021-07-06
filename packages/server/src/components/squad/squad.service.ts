import { Squad } from '@components/squad/squad.entity';
import { User } from '@components/user/user.entity';

export class SquadService {
  static async createSquad(name: string, members: string[]): Promise<Squad> {
    const membersUsers: User[] = members.map((uuid) => {
      const user = new User();
      user.uuid = uuid;

      return user;
    });

    const squad = new Squad();
    squad.name = name;
    squad.members = membersUsers;

    return squad.save();
  }
}
