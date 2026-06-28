import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1782602632059 implements MigrationInterface {
    name = 'CreateUserTable1782602632059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "telegram_id" bigint NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255), "username" character varying(255), "is_bot" boolean NOT NULL DEFAULT false, "is_active" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_c1ed111fba8a34b812d11f42352" UNIQUE ("telegram_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
