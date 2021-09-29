import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateJurisprudenceModel1610043175726 implements MigrationInterface {
    name = 'CreateJurisprudenceModel1610043175726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "jurisprudence" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "parentUrl" character varying, "title" character varying NOT NULL, "htmlContent" character varying, "textContent" character varying NOT NULL, "contentHtmlSelector" character varying, "updateDiff" character varying, "published" boolean NOT NULL DEFAULT true, "esId" character varying, "tribunal" character varying, "tipo" character varying, "classe" character varying, "numeroProcesso" character varying, "dataDecisao" date, "unidadeFederativa" character varying, "orgaoJulgador" character varying, "relator" character varying, "decisao" character varying, "ementa" character varying, "recorrente" character varying, "recorrido" character varying, "relatorio" character varying, "acordao" character varying, "juiz" character varying, "advogados" character varying, "advogadosReu" character varying, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "crawlerId" integer, CONSTRAINT "UQ_fc78ee8150633b24a5010a4737b" UNIQUE ("url"), CONSTRAINT "UQ_0f6c42744159dfbeeb515c72b00" UNIQUE ("slug"), CONSTRAINT "PK_087bfb237144131df37761b72b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jurisprudence_categories_category" ("jurisprudenceId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_cf5cf25cc37dfaab0797cacabcc" PRIMARY KEY ("jurisprudenceId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2eaf9b811802a2c9225295dd59" ON "jurisprudence_categories_category" ("jurisprudenceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a068fb09c18d92c19ab2edb5ad" ON "jurisprudence_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "jurisprudence_sub_categories_sub_category" ("jurisprudenceId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_a0c0131054bf40c251de2f68d1f" PRIMARY KEY ("jurisprudenceId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_69f122b1a870a1e639e2f00475" ON "jurisprudence_sub_categories_sub_category" ("jurisprudenceId") `);
        await queryRunner.query(`CREATE INDEX "IDX_1716d2f91cf24ae666052217eb" ON "jurisprudence_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`ALTER TABLE "jurisprudence" ADD CONSTRAINT "FK_817f19bfb26236c8300ea3dae4b" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_categories_category" ADD CONSTRAINT "FK_2eaf9b811802a2c9225295dd591" FOREIGN KEY ("jurisprudenceId") REFERENCES "jurisprudence"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_categories_category" ADD CONSTRAINT "FK_a068fb09c18d92c19ab2edb5ade" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_sub_categories_sub_category" ADD CONSTRAINT "FK_69f122b1a870a1e639e2f00475f" FOREIGN KEY ("jurisprudenceId") REFERENCES "jurisprudence"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_sub_categories_sub_category" ADD CONSTRAINT "FK_1716d2f91cf24ae666052217eb8" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "jurisprudence_sub_categories_sub_category" DROP CONSTRAINT "FK_1716d2f91cf24ae666052217eb8"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_sub_categories_sub_category" DROP CONSTRAINT "FK_69f122b1a870a1e639e2f00475f"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_categories_category" DROP CONSTRAINT "FK_a068fb09c18d92c19ab2edb5ade"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence_categories_category" DROP CONSTRAINT "FK_2eaf9b811802a2c9225295dd591"`);
        await queryRunner.query(`ALTER TABLE "jurisprudence" DROP CONSTRAINT "FK_817f19bfb26236c8300ea3dae4b"`);
        await queryRunner.query(`DROP INDEX "IDX_1716d2f91cf24ae666052217eb"`);
        await queryRunner.query(`DROP INDEX "IDX_69f122b1a870a1e639e2f00475"`);
        await queryRunner.query(`DROP TABLE "jurisprudence_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_a068fb09c18d92c19ab2edb5ad"`);
        await queryRunner.query(`DROP INDEX "IDX_2eaf9b811802a2c9225295dd59"`);
        await queryRunner.query(`DROP TABLE "jurisprudence_categories_category"`);
        await queryRunner.query(`DROP TABLE "jurisprudence"`);
    }

}
