import { Inject } from 'typedi';
import { DddContext } from './context';

export abstract class TransactionManager {
  @Inject()
  protected context!: DddContext;

  abstract transaction(runInTransaction: () => Promise<void>, datasource?: string): Promise<void>;
}
