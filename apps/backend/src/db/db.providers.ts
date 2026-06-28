import { AppDataSource } from './data-source';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
      }
      try {
        await AppDataSource.runMigrations();
        console.log('--- Database Migrations Executed Successfully ---');
      } catch (err) {
        console.error('--- Database Migrations Failed to Run ---', err);
        throw err;
      }
      return AppDataSource;
    },
  },
];