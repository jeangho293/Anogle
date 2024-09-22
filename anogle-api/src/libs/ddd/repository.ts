import { Service, Inject } from 'typedi';
import { EntityManager, type ObjectType } from 'typeorm';
import type { Aggregate } from './aggregate';
import { dataSourceMap } from '../../databases/mysql';
import { DddContext } from './context';

@Service()
export abstract class DddRepository<T extends Aggregate<T>> {
  @Inject()
  context!: DddContext;

  protected abstract entityClass: ObjectType<T>;

  protected get getManager() {
    if (this.context.has(EntityManager)) {
      return this.context.get(EntityManager);
    }
    return this.context.get(dataSourceMap).default.manager;
  }

  private async saveEntities(entities: T[]) {
    return this.getManager.save(entities);
  }

  async save(entities: T[]) {
    entities.forEach((entity) => entity.setTxId(this.context.txId));
    return this.saveEntities(entities);
  }
}
