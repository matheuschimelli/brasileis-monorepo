import {MigrationInterface, QueryRunner} from "typeorm";

export class AllowNullableOnCrawlerHtmlSelectors1617483870641 implements MigrationInterface {
    name = 'AllowNullableOnCrawlerHtmlSelectors1617483870641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "urlListEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."urlListEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "titleEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."titleEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "alternativeTitleEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."alternativeTitleEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "contentEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."contentEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "paginationEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."paginationEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "nextPageEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."nextPageEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "previousPageEl" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."previousPageEl" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."previousPageEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "previousPageEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."nextPageEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "nextPageEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."paginationEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "paginationEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."contentEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "contentEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."alternativeTitleEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "alternativeTitleEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."titleEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "titleEl" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "crawler_html_selector"."urlListEl" IS NULL`);
        await queryRunner.query(`ALTER TABLE "crawler_html_selector" ALTER COLUMN "urlListEl" SET NOT NULL`);
    }

}
