import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldsToCategory1606854324019 implements MigrationInterface {
    name = 'AddFieldsToCategory1606854324019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ADD "wiki" character varying`);
        await queryRunner.query(`ALTER TABLE "category" ADD "featured" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "featured"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "wiki"`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
    }

}
