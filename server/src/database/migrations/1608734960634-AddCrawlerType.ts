import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCrawlerType1608734960634 implements MigrationInterface {
    name = 'AddCrawlerType1608734960634'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" ADD "functionName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_type" ADD CONSTRAINT "UQ_58945b22a87534a05e7ab75047d" UNIQUE ("functionName")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" DROP CONSTRAINT "UQ_58945b22a87534a05e7ab75047d"`);
        await queryRunner.query(`ALTER TABLE "crawler_type" DROP COLUMN "functionName"`);
    }

}
