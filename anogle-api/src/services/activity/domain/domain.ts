import { Column, Entity } from 'typeorm';
import { Aggregate } from '../../../libs/ddd';
import type { User } from '../../user/domain/model';

type Creator = {
  userId: User['id'];
};

@Entity()
export class Activity extends Aggregate<Activity> {
  @Column()
  isActivated!: boolean;

  @Column()
  userId!: User['id'];

  constructor(args: Creator) {
    super();
    if (args) {
      this.isActivated = false;
      this.userId = args.userId;
    }
  }

  active() {
    this.isActivated = true;
  }
}
