import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1606853029870 implements MigrationInterface {
    name = 'CreateDatabase1606853029870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "law" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "parentUrl" character varying, "title" character varying NOT NULL, "htmlContent" character varying, "textContent" character varying NOT NULL, "contentHtmlSelector" character varying, "updateDiff" character varying, "published" boolean NOT NULL DEFAULT true, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "crawlerId" integer, CONSTRAINT "UQ_3d2424912150fc0260186b5002c" UNIQUE ("url"), CONSTRAINT "UQ_5f93d05583374423bfa7d4a31a1" UNIQUE ("slug"), CONSTRAINT "PK_5fb9289b907ae88d7f382e76793" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "UQ_f08643eb6693235bd717a56835e" UNIQUE ("slug"), CONSTRAINT "PK_59f4461923255f1ce7fc5e7423c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crawler_update_time" ("id" SERIAL NOT NULL, "monday" boolean NOT NULL DEFAULT false, "tuesday" boolean NOT NULL DEFAULT false, "wednesday" boolean NOT NULL DEFAULT false, "thursday" boolean NOT NULL DEFAULT false, "friday" boolean NOT NULL DEFAULT false, "saturday" boolean NOT NULL DEFAULT false, "sunday" boolean NOT NULL DEFAULT false, "updateMondayTime" character varying, "updateTuesdayTime" character varying, "updateWednesdayTime" character varying, "updateThursdayTime" character varying, "updateFridayTime" character varying, "updateSaturdayTime" character varying, "updateSundayTime" character varying, CONSTRAINT "PK_8fe757ee665814141e35e729734" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crawler_html_selector" ("id" SERIAL NOT NULL, "urlListEl" character varying NOT NULL, "titleEl" character varying NOT NULL, "alternativeTitleEl" character varying NOT NULL, "contentEl" character varying NOT NULL, "paginationEl" character varying NOT NULL, "nextPageEl" character varying NOT NULL, "previousPageEl" character varying NOT NULL, CONSTRAINT "PK_5bc9666b1f94993620119236da9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crawler_type" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "UQ_2c92a4d06572e183ac19cdd541d" UNIQUE ("name"), CONSTRAINT "PK_d485e84a0ee775146133a188405" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "crawler" ("id" SERIAL NOT NULL, "crawlerName" character varying NOT NULL, "baseUrl" character varying, "followOnlySameHost" boolean NOT NULL DEFAULT true, "updatedByBot" boolean NOT NULL DEFAULT false, "urlsToVisit" text, "logs" text, "urlsToVisitMongoId" character varying, "customCode" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "crawlerTypeId" integer, "updateTimeId" integer, "htmlSelectorsId" integer, CONSTRAINT "REL_9074e9e9c83075a84bce8e3a01" UNIQUE ("updateTimeId"), CONSTRAINT "REL_b3f6e62601cbc6af0a2c4e6127" UNIQUE ("htmlSelectorsId"), CONSTRAINT "PK_80a34e8da52ca526864c995e7a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_cb73208f151aa71cdd78f662d70" UNIQUE ("slug"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "summary" character varying, "imgCover" character varying, "content" character varying, "textContent" character varying, "published" boolean NOT NULL, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_0ab85f4be07b22d79906671d72f" UNIQUE ("slug"), CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('admin', 'editor', 'guest', 'subscriber')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(255), "email" character varying(255) NOT NULL, "username" character varying(20), "profilePicture" character varying, "tokens" text, "admin" boolean NOT NULL DEFAULT false, "role" "user_role_enum" NOT NULL DEFAULT 'guest', "google" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_516c0d3ae599cb565cc3d9d6e07" UNIQUE ("google"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "law_categories_category" ("lawId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_e2f29bfb17a6abf1a8f9a4b6d1c" PRIMARY KEY ("lawId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7e7f5860b19c93de4d32c4990b" ON "law_categories_category" ("lawId") `);
        await queryRunner.query(`CREATE INDEX "IDX_29eabff1b9ddc1ddc5f18afc56" ON "law_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "law_sub_categories_sub_category" ("lawId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_20404def2ae2e4dc0843f102676" PRIMARY KEY ("lawId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5551d2bb25742bc38e4947bc53" ON "law_sub_categories_sub_category" ("lawId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a9abdd1a9571f8bd6f1bf42944" ON "law_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`CREATE TABLE "crawler_categories_category" ("crawlerId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_a1e81c9daf3e3387e6e7f6d45b5" PRIMARY KEY ("crawlerId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ba3281ee1651d69631dccd67a1" ON "crawler_categories_category" ("crawlerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a720b64c4e0e23daacc70bafb2" ON "crawler_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "crawler_sub_categories_sub_category" ("crawlerId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_52323c63997c7b94247ef3b9961" PRIMARY KEY ("crawlerId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_884855fa463afbe65e10f10639" ON "crawler_sub_categories_sub_category" ("crawlerId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7e59af2495f4500d4d3732f174" ON "crawler_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`CREATE TABLE "article_categories_category" ("articleId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_a8116c8896d1d576d6ea7ad0d3c" PRIMARY KEY ("articleId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4ba35bcb36b2715f61faa696c7" ON "article_categories_category" ("articleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5d9199768aa2bd9f91d175dc6d" ON "article_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "article_sub_categories_sub_category" ("articleId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_af390139e6dd4315acbfb6fba65" PRIMARY KEY ("articleId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_758d213154226f74ae86818aa8" ON "article_sub_categories_sub_category" ("articleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_267ac3ce8a9ec9890d59c95f78" ON "article_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`ALTER TABLE "law" ADD CONSTRAINT "FK_1553ec5fce9002d7c26965a35d0" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler" ADD CONSTRAINT "FK_ef26f1cf8fe4716dcd7ceff2306" FOREIGN KEY ("crawlerTypeId") REFERENCES "crawler_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler" ADD CONSTRAINT "FK_9074e9e9c83075a84bce8e3a019" FOREIGN KEY ("updateTimeId") REFERENCES "crawler_update_time"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler" ADD CONSTRAINT "FK_b3f6e62601cbc6af0a2c4e61277" FOREIGN KEY ("htmlSelectorsId") REFERENCES "crawler_html_selector"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "law_categories_category" ADD CONSTRAINT "FK_7e7f5860b19c93de4d32c4990b6" FOREIGN KEY ("lawId") REFERENCES "law"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "law_categories_category" ADD CONSTRAINT "FK_29eabff1b9ddc1ddc5f18afc567" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "law_sub_categories_sub_category" ADD CONSTRAINT "FK_5551d2bb25742bc38e4947bc539" FOREIGN KEY ("lawId") REFERENCES "law"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "law_sub_categories_sub_category" ADD CONSTRAINT "FK_a9abdd1a9571f8bd6f1bf429448" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler_categories_category" ADD CONSTRAINT "FK_ba3281ee1651d69631dccd67a13" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler_categories_category" ADD CONSTRAINT "FK_a720b64c4e0e23daacc70bafb2c" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler_sub_categories_sub_category" ADD CONSTRAINT "FK_884855fa463afbe65e10f106394" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "crawler_sub_categories_sub_category" ADD CONSTRAINT "FK_7e59af2495f4500d4d3732f174d" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_categories_category" ADD CONSTRAINT "FK_4ba35bcb36b2715f61faa696c7e" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_categories_category" ADD CONSTRAINT "FK_5d9199768aa2bd9f91d175dc6d1" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_sub_categories_sub_category" ADD CONSTRAINT "FK_758d213154226f74ae86818aa86" FOREIGN KEY ("articleId") REFERENCES "article"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_sub_categories_sub_category" ADD CONSTRAINT "FK_267ac3ce8a9ec9890d59c95f789" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_sub_categories_sub_category" DROP CONSTRAINT "FK_267ac3ce8a9ec9890d59c95f789"`);
        await queryRunner.query(`ALTER TABLE "article_sub_categories_sub_category" DROP CONSTRAINT "FK_758d213154226f74ae86818aa86"`);
        await queryRunner.query(`ALTER TABLE "article_categories_category" DROP CONSTRAINT "FK_5d9199768aa2bd9f91d175dc6d1"`);
        await queryRunner.query(`ALTER TABLE "article_categories_category" DROP CONSTRAINT "FK_4ba35bcb36b2715f61faa696c7e"`);
        await queryRunner.query(`ALTER TABLE "crawler_sub_categories_sub_category" DROP CONSTRAINT "FK_7e59af2495f4500d4d3732f174d"`);
        await queryRunner.query(`ALTER TABLE "crawler_sub_categories_sub_category" DROP CONSTRAINT "FK_884855fa463afbe65e10f106394"`);
        await queryRunner.query(`ALTER TABLE "crawler_categories_category" DROP CONSTRAINT "FK_a720b64c4e0e23daacc70bafb2c"`);
        await queryRunner.query(`ALTER TABLE "crawler_categories_category" DROP CONSTRAINT "FK_ba3281ee1651d69631dccd67a13"`);
        await queryRunner.query(`ALTER TABLE "law_sub_categories_sub_category" DROP CONSTRAINT "FK_a9abdd1a9571f8bd6f1bf429448"`);
        await queryRunner.query(`ALTER TABLE "law_sub_categories_sub_category" DROP CONSTRAINT "FK_5551d2bb25742bc38e4947bc539"`);
        await queryRunner.query(`ALTER TABLE "law_categories_category" DROP CONSTRAINT "FK_29eabff1b9ddc1ddc5f18afc567"`);
        await queryRunner.query(`ALTER TABLE "law_categories_category" DROP CONSTRAINT "FK_7e7f5860b19c93de4d32c4990b6"`);
        await queryRunner.query(`ALTER TABLE "crawler" DROP CONSTRAINT "FK_b3f6e62601cbc6af0a2c4e61277"`);
        await queryRunner.query(`ALTER TABLE "crawler" DROP CONSTRAINT "FK_9074e9e9c83075a84bce8e3a019"`);
        await queryRunner.query(`ALTER TABLE "crawler" DROP CONSTRAINT "FK_ef26f1cf8fe4716dcd7ceff2306"`);
        await queryRunner.query(`ALTER TABLE "law" DROP CONSTRAINT "FK_1553ec5fce9002d7c26965a35d0"`);
        await queryRunner.query(`DROP INDEX "IDX_267ac3ce8a9ec9890d59c95f78"`);
        await queryRunner.query(`DROP INDEX "IDX_758d213154226f74ae86818aa8"`);
        await queryRunner.query(`DROP TABLE "article_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_5d9199768aa2bd9f91d175dc6d"`);
        await queryRunner.query(`DROP INDEX "IDX_4ba35bcb36b2715f61faa696c7"`);
        await queryRunner.query(`DROP TABLE "article_categories_category"`);
        await queryRunner.query(`DROP INDEX "IDX_7e59af2495f4500d4d3732f174"`);
        await queryRunner.query(`DROP INDEX "IDX_884855fa463afbe65e10f10639"`);
        await queryRunner.query(`DROP TABLE "crawler_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_a720b64c4e0e23daacc70bafb2"`);
        await queryRunner.query(`DROP INDEX "IDX_ba3281ee1651d69631dccd67a1"`);
        await queryRunner.query(`DROP TABLE "crawler_categories_category"`);
        await queryRunner.query(`DROP INDEX "IDX_a9abdd1a9571f8bd6f1bf42944"`);
        await queryRunner.query(`DROP INDEX "IDX_5551d2bb25742bc38e4947bc53"`);
        await queryRunner.query(`DROP TABLE "law_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_29eabff1b9ddc1ddc5f18afc56"`);
        await queryRunner.query(`DROP INDEX "IDX_7e7f5860b19c93de4d32c4990b"`);
        await queryRunner.query(`DROP TABLE "law_categories_category"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "crawler"`);
        await queryRunner.query(`DROP TABLE "crawler_type"`);
        await queryRunner.query(`DROP TABLE "crawler_html_selector"`);
        await queryRunner.query(`DROP TABLE "crawler_update_time"`);
        await queryRunner.query(`DROP TABLE "sub_category"`);
        await queryRunner.query(`DROP TABLE "law"`);
    }

}
