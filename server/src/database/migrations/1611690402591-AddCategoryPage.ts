import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCategoryPage1611690402591 implements MigrationInterface {
    name = 'AddCategoryPage1611690402591'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category_page" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "summary" character varying, "imgCover" character varying, "content" character varying, "textContent" character varying, "published" boolean NOT NULL, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "parentId" integer, CONSTRAINT "UQ_8f932319db2967292eecd7b10c5" UNIQUE ("slug"), CONSTRAINT "PK_eb251641db02b0e80d232fd26d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category_page_categories_category" ("categoryPageId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_03497d494d2956ad2bbd3960333" PRIMARY KEY ("categoryPageId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_921fc6b8590a30eda721b457d0" ON "category_page_categories_category" ("categoryPageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_21d6bb0f6f2052d63b48a07867" ON "category_page_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "category_page_sub_categories_sub_category" ("categoryPageId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_b2e2487243b509c1f1883d76299" PRIMARY KEY ("categoryPageId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f05784bcef90de9624c93d1b18" ON "category_page_sub_categories_sub_category" ("categoryPageId") `);
        await queryRunner.query(`CREATE INDEX "IDX_63ab303e201ecacd335f5cd8e9" ON "category_page_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`ALTER TABLE "category_page" ADD CONSTRAINT "FK_b8079881958b4f886fb2c318bab" FOREIGN KEY ("parentId") REFERENCES "category_page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_page_categories_category" ADD CONSTRAINT "FK_921fc6b8590a30eda721b457d0d" FOREIGN KEY ("categoryPageId") REFERENCES "category_page"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_page_categories_category" ADD CONSTRAINT "FK_21d6bb0f6f2052d63b48a078671" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_page_sub_categories_sub_category" ADD CONSTRAINT "FK_f05784bcef90de9624c93d1b183" FOREIGN KEY ("categoryPageId") REFERENCES "category_page"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_page_sub_categories_sub_category" ADD CONSTRAINT "FK_63ab303e201ecacd335f5cd8e9b" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_page_sub_categories_sub_category" DROP CONSTRAINT "FK_63ab303e201ecacd335f5cd8e9b"`);
        await queryRunner.query(`ALTER TABLE "category_page_sub_categories_sub_category" DROP CONSTRAINT "FK_f05784bcef90de9624c93d1b183"`);
        await queryRunner.query(`ALTER TABLE "category_page_categories_category" DROP CONSTRAINT "FK_21d6bb0f6f2052d63b48a078671"`);
        await queryRunner.query(`ALTER TABLE "category_page_categories_category" DROP CONSTRAINT "FK_921fc6b8590a30eda721b457d0d"`);
        await queryRunner.query(`ALTER TABLE "category_page" DROP CONSTRAINT "FK_b8079881958b4f886fb2c318bab"`);
        await queryRunner.query(`DROP INDEX "IDX_63ab303e201ecacd335f5cd8e9"`);
        await queryRunner.query(`DROP INDEX "IDX_f05784bcef90de9624c93d1b18"`);
        await queryRunner.query(`DROP TABLE "category_page_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_21d6bb0f6f2052d63b48a07867"`);
        await queryRunner.query(`DROP INDEX "IDX_921fc6b8590a30eda721b457d0"`);
        await queryRunner.query(`DROP TABLE "category_page_categories_category"`);
        await queryRunner.query(`DROP TABLE "category_page"`);
    }

}
