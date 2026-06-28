import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load env variables from .env relative to this file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL || 'postgresql://dev_user:dev_password@localhost:5432/mahibere_silassie_dev?schema=public',
  entities: [
    path.join(__dirname, '/../**/*.entity{.ts,.js}')
  ],
  migrations: [
    path.join(__dirname, '/migrations/*{.ts,.js}')
  ],
  synchronize: false,
  logging: true,
});
