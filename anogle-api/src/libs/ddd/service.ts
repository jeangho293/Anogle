import { Inject, Service } from 'typedi';
import { DddContext } from './context';

@Service()
export abstract class DddService {
  @Inject()
  private context!: DddContext;
}
