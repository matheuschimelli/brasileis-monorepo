import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDiarioOficialPagesModel1614641501822 implements MigrationInterface {
    name = 'CreateDiarioOficialPagesModel1614641501822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pagina_diario_oficial" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "dataPublicacao" date, "estado" character varying, "titulo" character varying NOT NULL, "htmlContent" character varying, "textContent" character varying NOT NULL, "published" boolean NOT NULL DEFAULT true, "esId" character varying, "tipo" character varying, "slug" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "parentId" integer, "crawlerId" integer, CONSTRAINT "UQ_1046e7991e61cebdf50537bf5eb" UNIQUE ("url"), CONSTRAINT "UQ_062cc862cc9104acf85355da533" UNIQUE ("slug"), CONSTRAINT "PK_af1a5e35e255dd3714ad364e29d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pagina_diario_oficial_categories_category" ("paginaDiarioOficialId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_efa621471d157e2ac626f197099" PRIMARY KEY ("paginaDiarioOficialId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_07bd382caf0005715e731a85b6" ON "pagina_diario_oficial_categories_category" ("paginaDiarioOficialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_72eb0ba330831d8ce7a003a751" ON "pagina_diario_oficial_categories_category" ("categoryId") `);
        await queryRunner.query(`CREATE TABLE "pagina_diario_oficial_sub_categories_sub_category" ("paginaDiarioOficialId" integer NOT NULL, "subCategoryId" integer NOT NULL, CONSTRAINT "PK_cfad782f44d4c69a764d0f108f2" PRIMARY KEY ("paginaDiarioOficialId", "subCategoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a14fa3b3ad31e60a5e2dc0b32b" ON "pagina_diario_oficial_sub_categories_sub_category" ("paginaDiarioOficialId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2b55c02ea1f95f6aba382227cf" ON "pagina_diario_oficial_sub_categories_sub_category" ("subCategoryId") `);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "parentUrl"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "recursoNome"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "contentHtmlSelector"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "updateDiff"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "tribunal"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "siglaTribunal"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "orgaoJulgador"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "dataJulgamento"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "classe"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP CONSTRAINT "UQ_dd7cd8553c400de045a57cdc9bc"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "codigoProcesso"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "unidadeFederativa"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "relator"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "decisao"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "ementa"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "recorrente"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "recorrido"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "relatorio"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "acordao"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "juiz"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "advogados"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "advogadosReu"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "estado" character varying`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial" ADD CONSTRAINT "FK_7cfa2c9cc9ad47c0f889e7c616d" FOREIGN KEY ("parentId") REFERENCES "diario_oficial"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial" ADD CONSTRAINT "FK_2a2e7fd669df502ea8c1b3c5d5b" FOREIGN KEY ("crawlerId") REFERENCES "crawler"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_categories_category" ADD CONSTRAINT "FK_07bd382caf0005715e731a85b63" FOREIGN KEY ("paginaDiarioOficialId") REFERENCES "pagina_diario_oficial"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_categories_category" ADD CONSTRAINT "FK_72eb0ba330831d8ce7a003a751b" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_sub_categories_sub_category" ADD CONSTRAINT "FK_a14fa3b3ad31e60a5e2dc0b32bb" FOREIGN KEY ("paginaDiarioOficialId") REFERENCES "pagina_diario_oficial"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_sub_categories_sub_category" ADD CONSTRAINT "FK_2b55c02ea1f95f6aba382227cf2" FOREIGN KEY ("subCategoryId") REFERENCES "sub_category"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_sub_categories_sub_category" DROP CONSTRAINT "FK_2b55c02ea1f95f6aba382227cf2"`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_sub_categories_sub_category" DROP CONSTRAINT "FK_a14fa3b3ad31e60a5e2dc0b32bb"`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_categories_category" DROP CONSTRAINT "FK_72eb0ba330831d8ce7a003a751b"`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial_categories_category" DROP CONSTRAINT "FK_07bd382caf0005715e731a85b63"`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial" DROP CONSTRAINT "FK_2a2e7fd669df502ea8c1b3c5d5b"`);
        await queryRunner.query(`ALTER TABLE "pagina_diario_oficial" DROP CONSTRAINT "FK_7cfa2c9cc9ad47c0f889e7c616d"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "advogadosReu" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "advogados" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "juiz" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "acordao" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "relatorio" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "recorrido" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "recorrente" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "ementa" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "decisao" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "relator" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "unidadeFederativa" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "codigoProcesso" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD CONSTRAINT "UQ_dd7cd8553c400de045a57cdc9bc" UNIQUE ("codigoProcesso")`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "classe" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "dataJulgamento" date`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "orgaoJulgador" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "siglaTribunal" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "tribunal" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "updateDiff" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "contentHtmlSelector" character varying`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "recursoNome" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "diario_oficial" ADD "parentUrl" character varying`);
        await queryRunner.query(`DROP INDEX "IDX_2b55c02ea1f95f6aba382227cf"`);
        await queryRunner.query(`DROP INDEX "IDX_a14fa3b3ad31e60a5e2dc0b32b"`);
        await queryRunner.query(`DROP TABLE "pagina_diario_oficial_sub_categories_sub_category"`);
        await queryRunner.query(`DROP INDEX "IDX_72eb0ba330831d8ce7a003a751"`);
        await queryRunner.query(`DROP INDEX "IDX_07bd382caf0005715e731a85b6"`);
        await queryRunner.query(`DROP TABLE "pagina_diario_oficial_categories_category"`);
        await queryRunner.query(`DROP TABLE "pagina_diario_oficial"`);
    }

}
