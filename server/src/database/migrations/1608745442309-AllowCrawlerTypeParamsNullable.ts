import {MigrationInterface, QueryRunner} from "typeorm";

export class AllowCrawlerTypeParamsNullable1608745442309 implements MigrationInterface {
    name = 'AllowCrawlerTypeParamsNullable1608745442309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_type" ALTER COLUMN "params" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_type"."params" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "crawler_type"."params" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_type" ALTER COLUMN "params" SET NOT NULL`);
    }

}
