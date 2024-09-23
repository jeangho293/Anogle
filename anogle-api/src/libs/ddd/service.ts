import { Inject, Service } from 'typedi';
import { DddContext } from './context';
import { TransactionManager } from './transaction-manager';

@Service()
export abstract class DddService {
  @Inject()
  private context!: DddContext;

  @Inject()
  protected transactionManager!: TransactionManager;
}
