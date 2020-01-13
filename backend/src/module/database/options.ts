import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getEntities, getMigrations } from 'src/module/database/utils';

enum Workspace {
  Dev = 'DEVELOPMENT',
  Prod = 'PRODUCTION',
  Stage = 'STAGE'
}

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER || 'explorer',
  password: process.env.PG_PASSWORD || '1',
  database: process.env.PG_DB || 'test_database',
  uuidExtension: 'uuid-ossp',
  logging: ['warn', 'error', 'query'],
  entities: getEntities(),
  migrations: getMigrations(),
  cli: {
      // Location of migration should be inside src folder
      // to be compiled into dist/ folder.
      migrationsDir: 'src/modules/database/migration',
  },
  synchronize: !process.env.WORKSPACE || process.env.WORKSPACE === Workspace.Dev,
};

export = options;
