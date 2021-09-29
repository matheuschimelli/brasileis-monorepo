import {MigrationInterface, QueryRunner} from "typeorm";

export class AllowCrawlerTypeFunctionNullable1608745221610 implements MigrationInterface {
    name = 'AllowCrawlerTypeFunctionNullable1608745221610'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" ALTER COLUMN "functionName" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_type"."functionName" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_type" DROP CONSTRAINT "UQ_58945b22a87534a05e7ab75047d"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" ADD CONSTRAINT "UQ_58945b22a87534a05e7ab75047d" UNIQUE ("functionName")`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_type"."functionName" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_type" ALTER COLUMN "functionName" SET NOT NULL`);
    }

}
