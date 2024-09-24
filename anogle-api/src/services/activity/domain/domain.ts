import { Column, Entity } from 'typeorm';
import { Aggregate } from '../../../libs/ddd';
import type { User } from '../../user/domain/model';

type Creator = {
  userId: number;
};

@Entity()
export class Activity extends Aggregate<Activity> {
  @Column()
  startedAt!: string;

  @Column()
  location!: string;

  @Column()
  userId!: number;

  constructor(args: Creator) {
    super();
    if (args) {
      this.startedAt = '';
      this.location = '';
      this.userId = args.userId;
    }
  }

  active({ startedAt, location }: { startedAt: string; location: string }) {
    this.startedAt = startedAt;
    this.location = location;
  }
}
