import { DddService } from './service';

export function Transaction(option?: { datasource?: string }) {
  return function (target: DddService, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // eslint-disable-next-line no-param-reassign
    descriptor.value = async function (this: DddService, ...args: any[]) {
      let result: any;

      await this.transactionManager.transaction(async () => {
        result = await originalMethod.apply(this, args);
      }, option?.datasource);

      return result;
    };

    return descriptor;
  };
}
