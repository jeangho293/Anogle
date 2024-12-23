import { Inject, Service } from 'typedi';
import { DddService, EventHandler, Transactional } from '@libs/ddd';
import { RoleRepository } from '../infrastructure/repository';
import { CreatedUserEvent } from '../../user/domain/events';
import { Role, type RoleType } from '../domain/model';
import { FilteredRoleSpec } from '../domain/specs';

@Service()
export class RoleService extends DddService {
  constructor(@Inject() private roleRepository: RoleRepository) {
    super();
  }

  @Transactional()
  async retrieve({ id, role, userId }: { id?: number; role?: RoleType; userId?: string }) {
    const [result] = await this.roleRepository.satisfyElementFrom(
      new FilteredRoleSpec({
        id,
        role,
        userId,
      })
    );

    return result;
  }

  @Transactional()
  @EventHandler(CreatedUserEvent)
  async createdUserEvent(event: CreatedUserEvent) {
    const { userId, role: type } = event;

    const role = new Role({ userId, role: type });

    await this.roleRepository.save([role]);
  }
}
