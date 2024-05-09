import { Privilege } from './privilege.mysql.entity';

/**
 * inject的内容，会作为useFactory的参数。
 */
export const PrivilegeProviders = [
  {
    provide: 'PRIVILEGE_REPOSITORY',
    useFactory: (AppDataSource) => AppDataSource.getRepository(Privilege),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
