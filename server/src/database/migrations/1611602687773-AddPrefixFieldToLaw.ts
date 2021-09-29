import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPrefixFieldToLaw1611602687773 implements MigrationInterface {
    name = 'AddPrefixFieldToLaw1611602687773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "law" ADD "prefix" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "law" DROP COLUMN "prefix"`);
    }

}
